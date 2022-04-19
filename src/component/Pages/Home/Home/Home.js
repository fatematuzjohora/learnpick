import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../../hooks/useServices";
import Banner from "../Banner/Banner";
import Welcome from "../WelcomePart/WelcomePart";
import ServicesPart from "./ServicesPart/ServicesPart";

const Home = () => {
const [services] = useServices([])

  return (
    <>
      <Banner></Banner>
      <Welcome></Welcome>
      <h1 className="mb-4 text-center mt-3">Services Section</h1>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 mx-3">
        {
         services.slice(0, 3).map((service) => <ServicesPart key={service.id} service={service}></ServicesPart>) 
        }
      </div>
      <div className="d-flex justify-content-center py-5">
        <button>
          {" "}
          <Link className="text-decoration-none" to="/services">
            See All Service
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;