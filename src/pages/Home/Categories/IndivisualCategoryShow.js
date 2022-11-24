import React from 'react';

const IndivisualCategoryShow = ({ product,setTitle }) => {
    const {sellerName,sellerPhoneNumber,location,category,condition,description,originalPrice,postTime,yearOfUse,
        resalePrice, productPhoto, productName, parchaseYear } = product;
    setTitle(category)
   
    return (
        
            
        <div className="card card-side bg-base-100 shadow-xl">
        <figure className='w-1/2 h-full'><img src={productPhoto} alt="Bike"/></figure>
        <div className="card-body">
                <h2 className="card-title">{ productName}</h2>
                <p>Seller Name: {sellerName }</p>
                <p>Seller Phone: {sellerPhoneNumber }</p>
                <p>Location: {location }</p>
                <p>Condition: {condition }</p>
                <p>Original Price: {originalPrice }</p>
                <p>Resale Price: {resalePrice }</p>
                <p>Parchase Year: {parchaseYear }</p>
                <p>Posted Time: {postTime }</p>
                <p>Year Of Use: {yearOfUse }</p>
                <p>Description: {description }</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
            </div>
        </div>
        </div>
    
    );
};

export default IndivisualCategoryShow;