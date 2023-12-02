import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Container, Form, Button, Card } from 'react-bootstrap';
import { addToWishlist } from '../Redux/Slice/wishlist';
import { addToCart } from '../Redux/Slice/cartSlice';
import axios from 'axios';

function Rowpost() {
  const [clothingList, setClothingList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredClothingList, setFilteredClothingList] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const productList = response.data;

        const clothingList = productList.filter(
          (product) =>
            product.category.toLowerCase().includes('men') ||
            product.category.toLowerCase().includes('women')
        );

        setClothingList(clothingList);
        setFilteredClothingList(clothingList);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const dispatch = useDispatch();

  const handleSearch = () => {
    const filteredList = clothingList.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredClothingList(filteredList);
  };

  return (
    <>
      <Container style={{ marginTop: '100px', overflowX: 'hidden' }}>
      <div className='d-flex flex-row  w-100 align-items-center ms-5 mb-4'>
      <Form className=" me-2 ms-3 ">
      <Form.Group className="w-100" >
       <Form.Control
        type="text"
        placeholder="Search for items"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Form.Group>
  </Form>
  <Button variant="primary" onClick={handleSearch}>
    Search
  </Button>
</div>
        <Row className="ms-5">
          {filteredClothingList?.length > 0 ? (
            filteredClothingList.map((products, index) => (
              <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
                <Card
                  className=" rounded"
                  style={{
                    width: '18rem',
                    height: '32rem',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 8px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  <Card.Img height={'200px'} variant="top" src={products?.image} />
                  <Card.Body>
                    <Card.Title style={{ height: '100px' }}>{products?.title}</Card.Title>
                    <Card.Text style={{ height: '100px' }}>
                      <p>{products?.description.slice(0, 55)}...</p>
                      <p className="fw-bold">$ {products?.price}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        className="btn btn-light"
                        onClick={() => dispatch(addToWishlist(products))}
                      >
                        <i className="fa-solid fa-heart text-danger fa-2x"></i>
                      </Button>
                      <Button
                        className="btn btn-light"
                        onClick={() => dispatch(addToCart(products))}
                      >
                        <i className="fa-solid fa-cart-shopping fa-2x"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-danger">Nothing to display</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Rowpost;
