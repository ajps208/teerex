import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../Redux/Slice/wishlist";
import { addToCart } from "../Redux/Slice/cartSlice";

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const dispatch=useDispatch()
  const handleWishlist=(products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWishlist(products.id))

  }

  return (
    <div style={{ marginTop: "100px",overflowX:"hidden"  }}>
      <Row className="ms-5">
        {wishlistArray.length > 0 ? (
          wishlistArray.map((products, index) => (
            <Col key="" className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card
                className="rounded"
                style={{ width: '18rem',height:"32rem",backgroundColor:"white",boxShadow: '0 4px 8px rgba(0, 255, 255, 0.5)'}}
              >
                <Card.Img
                  height={"200px"}
                  variant="top"
                  src={products?.image}
                />
                <Card.Body>
                  <Card.Title  style={{height:"100px"}}>{products?.title}</Card.Title>
                  <Card.Text  style={{height:"100px"}}>
                    <p>{products?.description.slice(0, 55)}...</p>
                    <p className="fw-bold">$ {products?.price}</p>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button className="btn btn-light" onClick={()=>dispatch(removeFromWishlist(products.id))}>
                      <i className="fa-solid fa-trash text-danger fa-2x"></i>
                    </Button>
                    <Button className="btn btn-light" onClick={()=>handleWishlist(products)}>
                      <i className="fa-solid fa-cart-shopping fa-2x"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div style={{ height: "60vh" }} className="w-100 d-flex flex-column justify-content-center align-items-center">
            <img height={'250px'} src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-shopping-cart-icon-design-png-image_1013296.jpg" alt="" />
            <h3 className="fw-bolder text-primary">Your Wishlist Is Empty</h3>
            <Link style={{textDecoration:"none"}} className="btn btn-success rounded mt-3" to={'/'}>Bact to Home </Link>
          </div>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;
