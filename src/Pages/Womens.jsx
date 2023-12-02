import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToWishlist } from '../Redux/Slice/wishlist';
import { addToCart } from '../Redux/Slice/cartSlice';
import axios from 'axios';

function Womens() {
  const [clothingList, setClothingList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productList = response.data;
  
        // Filter only men's clothing
        const menClothingList = productList.filter(product =>
          product.category.toLowerCase() === "women's clothing"
        );
  
        console.log('Men\'s Clothing List:', menClothingList);
  
        setClothingList(menClothingList);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  
  return (
    <>
      <div style={{ marginTop: "50px", overflowX: "hidden" }}>
      

        <Row className='ms-5'>
        <h2 className='text-light'>Womens Clothings</h2>
          {clothingList.length > 0 ? clothingList.map((products, index) => (
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card className=' rounded' style={{ width: '18rem', height: "32rem", backgroundColor: "white", boxShadow: '0 4px 8px rgba(0, 255, 255, 0.5)' }}>
                <Card.Img height={'200px'} variant="top" src={products?.image} />
                <Card.Body>
                  <Card.Title style={{ height: "100px" }}>{products?.title}</Card.Title>
                  <Card.Text style={{ height: "100px" }}>
                    <p>{products?.description.slice(0, 55)}...</p>
                    <p className='fw-bold'>$ {products?.price}</p>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn btn-light' onClick={() => dispatch(addToWishlist(products))}><i className="fa-solid fa-heart text-danger fa-2x"></i></Button>
                    <Button className='btn btn-light' onClick={() => dispatch(addToCart(products))}><i className="fa-solid fa-cart-shopping fa-2x"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p className='text-danger'>Nothing to display</p>}
        </Row>
      </div>
    </>
  );
}

export default Womens;
