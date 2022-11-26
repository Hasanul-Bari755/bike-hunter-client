import BookingModal from "../../BookingModal.js/BookingModal";

const IndivisualCategoryShow = ({ product, setProduct }) => {
  const {
    sellerName,
    sellerPhoneNumber,
    location,
    category,
    condition,
    description,
    originalPrice,
    postTime,
    yearOfUse,
    resalePrice,
    productPhoto,
    productName,
    parchaseYear,
  } = product;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={productPhoto} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Seller Name: {sellerName}</p>
        <p>Seller Phone: {sellerPhoneNumber}</p>
        <p>Location: {location}</p>
        <p>Condition: {condition}</p>
        <p>Original Price: {originalPrice}</p>
        <p>Resale Price: {resalePrice}</p>
        <p>Parchase Year: {parchaseYear}</p>
        <p>Posted Time: {postTime}</p>
        <p>Year Of Use: {yearOfUse}</p>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setProduct(product)}
            htmlFor="booking-modal"
            className="btn bg-yellow-600"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default IndivisualCategoryShow;
