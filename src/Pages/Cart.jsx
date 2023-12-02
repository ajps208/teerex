import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../Redux/Slice/cartSlice";

function Cart() {
  const navigate=useNavigate()
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [total,setTotal]=useState(0)
  const getCartTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  const handleCart=()=>{
    dispatch(emptyCart())
    alert("order sucessfully placed.........")
    navigate('/')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  


  return (
    <div style={{ marginTop: "100px", overflowX: "hidden" }} >
      {cartArray.length > 0 ? (
      <div className="row mt-5 d-flex justify-content-center align-items-center ">
          <div className="col-lg-8 mt-5">
            <table className="table shadow border">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img width={'100px'} src={product.image} alt="" /></td>
                    <td>$ {product.price}</td>
                    <td><button className="btn"><i style={{color:"red"}} onClick={()=>dispatch(removeFromCart(product.id))} className="fa-solid fa-trash  fa-2x"></i></button></td>
                    
                  </tr>
                 
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className="col-lg-1"></div> */}
          <div className="col-lg-3 ">
            <h1 className="text-primary">Cart Summary</h1>
            <div className="border mt-3 p-3 rounded shadow">
              <h4 className="text-light">Total Products: <span>{cartArray.length}</span></h4>
              <h4 className="mt-3 text-light">Total: <span className="text-danger fw-bolder fs-2">{total}</span></h4>
              <div className="d-grid">
                <button onClick={handleCart} className="btn btn-success mt-2 rounded">Check Out</button>
              </div>
            </div>
          </div>
      </div>
      ) : (
        <div
          style={{ height: "60vh" }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <img
            height={"250px"}
            src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-shopping-cart-icon-design-png-image_1013296.jpg"
            alt=""
          />
          <h3 className="fw-bolder text-primary">Your Cart Is Empty</h3>
          <Link style={{ textDecoration: "none" }} className="btn btn-success rounded mt-3" to={'/'}>
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
