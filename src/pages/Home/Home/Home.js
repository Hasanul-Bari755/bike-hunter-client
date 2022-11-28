import React from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Discount from "../Discount/Discount";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Advertise></Advertise>
      <Discount></Discount>
    </div>
  );
};

export default Home;
