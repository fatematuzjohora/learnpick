import React from "react";
import { Carousel } from "react-bootstrap";

import BannerImage1 from "../../../Images/Banner/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg";
import BannerImage2 from "../../../Images/Banner/jake-ingle-tZaA8VqJG3g-unsplash (1).jpg";
import BannerImage3 from "../../../Images/Banner/kalen-emsley-7bwQXzbF6KE-unsplash.jpg";

const Banner = () => {
  return (
    <Carousel style={{marginBottom: '80px'}}>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={BannerImage1} alt="First slide" />
        <Carousel.Caption>
          <h3> HELL PHOTOGRAPHY</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={BannerImage2} alt="Second slide" />
        <Carousel.Caption>
          <h3>AWESOME SHOOTS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={BannerImage3} alt="Third slide" />
        <Carousel.Caption>
          <h3>VICATION PHOTOGRAPHY</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;