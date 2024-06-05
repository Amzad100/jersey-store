import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SingleJersey({ jersey }) {
  // eslint-disable-next-line react/prop-types
  const { _id, country, brand, price, Stock_quantity, img_url } = jersey;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img_url}
          alt="Shoes"
          className="rounded-xl w-full h-[400px]"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{country}</h2>
        <p>Price: {price}</p>
        <p>Brand: {brand}</p>
        <p>Stock Quantity: {Stock_quantity}</p>
        <div className="card-actions">
          <Link to={`/jerseys/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
