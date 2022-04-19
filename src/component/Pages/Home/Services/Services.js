import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Service from "../../Home/Service/Service";
import "../../../Shared/CustomCss/Custom.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="mt-5 services-container">
      <h1 className="mb-4 text-center mt-3">Our Services</h1>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 mx-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="d-flex justify-content-center py-5">
        <button>
          {" "}
          <Link className="text-decoration-none" to="/services">
            See All Service
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Services;