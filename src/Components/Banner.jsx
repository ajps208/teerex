import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { addToWishlist } from '../Redux/Slice/wishlist';
import { addToCart } from '../Redux/Slice/cartSlice';
import { useDispatch } from 'react-redux';



function Banner() {
  const [clothingList, setClothingList] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productList = response.data;

        // Filter both men's and women's clothing
        const clothingList = productList.filter(product =>
          product.category.toLowerCase().includes('men') || product.category.toLowerCase().includes('women')
        );

        setClothingList(clothingList);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const dispatch=useDispatch()


  return (
    <Carousel controls={false} indicators={false} className="bg-dark" style={{ position: "relative", boxShadow: '0 4px 8px rgba(255, 255, 0, 0.5)',backgroundColor: "#130f40", backgroundImage: 'linear-gradient(315deg, #130f40 0%, #000000 74%)' }} >
      {clothingList.map(product => (
        <Carousel.Item key={product.id} style={{ height: "70vh" }}>
          <img
            className="d-block w-25"
            src={product.image}
            alt={product.title}
            style={{ objectFit: "cover", height: "100%" }}
          />
          <div style={{marginLeft:"25%",marginBottom:"8%"}} className="carousel-caption w-50  d-none d-md-block">
            <h2 className="fs-1 fw-bolder text-white">
              {product.title}
            </h2>
            <p className="fs-5 fw-normal text-white">
            {product?.description.slice(0,245)}...
            </p>
            <Button className='btn btn-success w-25' onClick={()=>dispatch(addToWishlist(product))}><i className="fa-solid fa-heart text-danger fa-2x"></i> WishList</Button>
              <Button className='ms-2 btn btn-info w-25' onClick={()=>dispatch(addToCart(product))}><i className=" fa-solid fa-cart-shopping fa-2x"></i> Cart</Button>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
