import Swal from "sweetalert2";

export default function AddJersey() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Do you want to add this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel",
    });

    if (!result.isConfirmed) {
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
      brand,
      Stock_quantity,
      img_url,
    };

    try {
      const response = await fetch("http://localhost:5000/jerseys", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Jersey successfully added!",
          icon: "success",
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add the jersey. Please try again.",
          icon: "error",
        });
      }

      console.log(result);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again.",
        icon: "error",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-6xl font-bold">Add a Jersey page</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-5 mb-5 grid md:grid-cols-2 gap-5">
            <div>
              <h1 className="font-bold my-1">Picture URL of the Jersey:</h1>
              <input
                type="text"
                name="img_url"
                placeholder="Picture URL of the Jersey"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Coutnry</h1>
              <input
                type="text"
                name="country"
                placeholder="Coutnry"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Seller name</h1>
              <input
                type="text"
                name="seller"
                placeholder="Seller name"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Price</h1>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Stock Quantity</h1>
              <input
                type="text"
                name="Stock_quantity"
                placeholder="Stock Quantity"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Brand</h1>
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            <div>
              <h1 className="font-bold my-1">Detail description</h1>
              <textarea
                type="text"
                name="description"
                placeholder="Detail description"
                className="textarea textarea-bordered w-full max-w-xl"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Add a Jersey"
                className="w-full max-w-xl mt-8 btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
