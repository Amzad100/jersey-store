import { useEffect, useState } from "react";
import SingleJerseyDashboard from "./SingleJerseyDashboard";

export default function AllJersey() {
  const [jerseys, setJerseys] = useState([]);

  useEffect(() => {
    fetch("https://jersey-store-server.vercel.app/jerseys")
      .then((res) => res.json())
      .then((data) => setJerseys(data));
  });

  return (
    <div>
      <h1 className="text-5xl my-5 font-bold text-center">All Jerseys here</h1>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Country</th>
              <th>Seller</th>
              <th>Price</th>
              <th>View Details</th>
              <th>Update Book</th>
              <th>Delete Book</th>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line no-undef
              jerseys.map((jersey) => (
                <SingleJerseyDashboard
                  key={jersey.id}
                  jersey={jersey}
                ></SingleJerseyDashboard>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
