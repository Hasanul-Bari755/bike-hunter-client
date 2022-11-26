import React, { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AdverticeProductShow = ({ advertiseproduct }) => {
  const { productName, resalePrice, postTime, productPhoto, category } =
    advertiseproduct;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 w-full mx-auto mt-12"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <PhotoProvider>
            <PhotoView src={productPhoto}>
              <img className="h-80" src={productPhoto} alt="" />
            </PhotoView>
          </PhotoProvider>
          <div className="flex items-center text-xs">
            <span>Advertice Added: {postTime}</span>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold dark:text-emerald-400">
            {productName}
          </h3>
          <h3 className="text-xl font-semibold dark:text-emerald-400">
            Category: {category}
          </h3>

          <p className="leading-snug text-yellow-600 text-3xl">
            Price: {resalePrice} BDT
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdverticeProductShow;
