import SingleJersey from "./SingleJersey";

// eslint-disable-next-line react/prop-types
export default function Jerseys({ data }) {
  return (
    <div>
      <div className="text-center my-4">
        <h1 className=" font-bold text-3xl">Top Jerseys</h1>
        <div className="form-control mx-auto mt-4 max-w-sm">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((jersey) => (
            <SingleJersey key={jersey.id} jersey={jersey} />
          ))
        }
      </div>
    </div>
  );
}
