import React from 'react';

const ShowCategories = ({ categorie }) => {
    const { name,img} =  categorie;
    return (
    <div className="card w-full h-16 bg-base-100 shadow-xl image-full ">
    <figure><img  src={img} alt="Shoes" /></figure>
    <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-5xl">{name }</h2>
    
  </div>
</div>
    );
};

export default ShowCategories;