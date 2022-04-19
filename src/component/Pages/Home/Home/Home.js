import React from "react";
// import { useProduct } from "../../../../hooks/useProduct";
import Services from "../../Home/Services/Services";
import Banner from "../Banner/Banner";
import Welcome from "../WelcomePart/WelcomePart";

const Home = () => {
//   const [products, setProducts] = useProduct();
//   console.log(products);
  return (
    <>
      <Banner></Banner>
      <Welcome></Welcome>
      <Services></Services>
    </>
  );
};

export default Home;