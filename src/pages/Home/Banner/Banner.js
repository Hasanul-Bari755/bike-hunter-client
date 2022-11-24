import React from 'react';

const Banner = () => {
    return (
         <div className="carousel max-w-[1280px]  mx-auto">
  <div id="slide1" className="carousel-item relative w-full h-1/3">
    <img src="https://i.ibb.co/H4Y7Hy1/mt-15-2-062e4b1d700b63.webp" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/X366pTB/raider615597855c4d3.webp" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/pvgsMxJ/honda-hornet-2-0-14.jpg" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qp3VhfP/quicknews-tvs-radeon-bs61-320x240.webp" alt='' className="w-full rounded" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
    </div>
    );
};

export default Banner;