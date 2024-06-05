import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  console.log(userInfo);
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="my-4">
          <Link>
            <button className="btn btn-error">Update Profile</button>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full mb-4"
            src={user.photoURL}
            alt={`${user.displayName}'s profile`}
          />
          <h1 className="text-2xl font-bold mb-2">Name: {userInfo?.name}</h1>
          <h2 className="text-gray-600 mb-1">Email: {userInfo?.email}</h2>
        </div>
      </div>
    </div>
  );
}
