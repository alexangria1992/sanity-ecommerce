import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
