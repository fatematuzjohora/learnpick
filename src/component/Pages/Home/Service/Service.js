import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../../Shared/CustomCss/Custom.css";

const Service = ({ service }) => {
  const { name, price, about, img } = service;
  return (
    <div>
      <div className="card h-100 col shadow  rounded py-2">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{about}</p>
      </div>
      <h5 className="ps-4">Price: {price}</h5>
      <div>
        <Button className="button-style w-100">
          <Link className="text-decoration-none text-light" to="/checkout">
            Checkout
          </Link>
        </Button>
      </div>
    </div>
    </div>
    
  );
};

export default Service;