import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import welcome from "../../../Images/j-kelly-brito-PeUJyoylfe4-unsplash.jpg";
import "../../../Shared/CustomCss/Custom.css"


const Welcome = () => {
  return (
    <div >
      <div className="card mb-3">
        <div className="row g-0 align-items-center px-3">
          <div className="col-md-6 col-12">
            <img src={welcome} className="img-fluid rounded " alt="..." />
          </div>
          <div className="col-md-6 col-12">
            <div className="card-body text-center">
              <h1 className="card-title">Sharp Your Brain With LearnPick</h1>
              <h6 className="card-text mt-4">
              Thank You For Visiting My Website And Exploring My Knowledge. 
              Hopefully My Knowledge Connects With You On Many Levels - Thank You For Visiting!
              </h6>
              <Button className="button-style">
                  <Link className="text-decoration-none text-light" to="/myphotography"> LearnPick</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;