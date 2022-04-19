import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import welcome from "../../../Images/jon-tyson-P2aOvMMUJnY-unsplash.jpg";
import "../../../Shared/CustomCss/Custom.css"


const Welcome = () => {
  return (
    <div >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6 col-12">
            <img src={welcome} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 col-12">
            <div className="card-body">
              <h1 className="card-title">SHARP YOUR BRAIN WITH LearnPick</h1>
              <h6 className="card-text mt-4">
              THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY KNOWLEDGE. 
              HOPEFULLY MY KNOWLEDGE CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!
              </h6>
              <Button className="button-style">
                  <Link className="text-decoration-none" to="/myphotography"> LearnPick</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;