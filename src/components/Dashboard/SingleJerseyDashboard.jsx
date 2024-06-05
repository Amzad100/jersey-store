import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export default function SingleJerseyDashboard({ jersey }) {
  // eslint-disable-next-line react/prop-types
  const { _id, country, seller, price, img_url } = jersey;

  const handleDelete = async () => {
    const confirmation = await Swal.fire({
      title: "Are you sure you want to delete this jersey?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    });

    if (!confirmation.isConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/jerseys/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const result = await response.json();
        Swal.fire({
          title: "Deleted!",
          text: "Book deleted successfully!",
          icon: "success",
        });
        console.log(result);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the book.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the book.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <tr>
        <th>{_id}</th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{country}</td>
        <td>{seller}</td>
        <td>{price}</td>
        <td>
          <Link to={`/jerseys/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </td>
        <td>
          <Link to={`updatejersey/${_id}`}>
            <button className="btn btn-warning">Update</button>
          </Link>
        </td>
        <td>
          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
