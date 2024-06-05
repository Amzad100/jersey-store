import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateJersey() {
  const jersey = useLoaderData();
  const [country, setCountry] = useState(jersey.country);
  const [price, setPrice] = useState(jersey.price);
  const [seller, setSeller] = useState(jersey.seller);
  const [description, setDescription] = useState(jersey.description);
  const [img_url, setImageURL] = useState(jersey.img_url);
  const [Stock_quantity, setStockQuantity] = useState(jersey.Stock_quantity);
  const [brand, setBrand] = useState(jersey.brand);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmation = await Swal.fire({
      title: "Are you sure you want to update the book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    });

    if (!confirmation.isConfirmed) {
      return;
    }

    const form = e.target;
    const country = form.country.value;
    const price = form.price.value;
    const seller = form.seller.value;
    const description = form.description.value;
    const img_url = form.img_url.value;
    const Stock_quantity = form.Stock_quantity.value;
    const brand = form.brand.value;

    const data = {
      country,
      price,
      description,
      seller,
      img_url,
      Stock_quantity,
      brand,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/jerseys/${jersey._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        Swal.fire({
          title: "Success!",
          text: "Jersey updated successfully!",
          icon: "success",
        });
        console.log(result);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to update the Jersey.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while updating the Jersey.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-6xl font-bold">Update Jersey</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-5 mb-5 grid md:grid-cols-2 gap-5">
            <div>
              <h1 className="font-bold my-1">Picture URL of the Jersey:</h1>
              <input
                type="text"
                name="img_url"
                value={img_url}
                onChange={(e) => setImageURL(e.target.value)}
                placeholder="Picture URL of the Jersey"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Country</h1>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Seller Name</h1>
              <input
                type="text"
                name="seller"
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
                placeholder="Seller name"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Price</h1>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Stock Quantity</h1>
              <input
                type="text"
                name="Stock_quantity"
                value={Stock_quantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                placeholder="Stock Quandity"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Brand</h1>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Detail description</h1>
              <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Detail description"
                className="textarea textarea-bordered w-full max-w-xl"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Update Jersey"
                className="w-full max-w-xl mt-8 btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
