import React from "react";
import { Carousel } from "react-bootstrap";

import BannerImage1 from "../../../Images/Banner/IELTS.jpg";
import BannerImage2 from "../../../Images/Banner/Economics.jpg";
import BannerImage3 from "../../../Images/Banner/Chemistry.jpg";

const Banner = () => {
  return (
    <Carousel style={{marginBottom: '80px'}}>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={BannerImage1} alt="First slide" />
        <Carousel.Caption>
          <h3> IELTS Class</h3>
          <p>You still have time to take the English Test.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={BannerImage2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Economics Class</h3>
          <p>Economy class ,also called third class, coach class or to distingulish it.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={BannerImage3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Chemistry Class</h3>
          <p>
           Chemistry,is the study of matter and the changes it undergoes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;