import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

export default function GoogleLogin() {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch(`http://localhost:5000/user`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }).then(res=>res.json())
        .then(data=>console.log(data))
      }
    });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className=" bg-green-400 px-5 py-3 rounded-md flex justify-center items-center"
    >
      <FcGoogle className="text-xl"></FcGoogle>
      <button className="text-white font-semibold">Google</button>
    </div>
  );
}
