import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const [password, setPassword] = useState("");
  const [error] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: name,
        };
        fetch(`http://localhost:5000/user`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
      const loggedUser = data.user;
      console.log(loggedUser);
    });
  };
  const isSignUpDisabled = password !== confirmPassword;
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">SignUP now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card w-full max-w-sm shadow-2xl bg-base-100"
          >
            <h1 className="text-center mt-4 text-3xl font-bold">SignUP</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  {errors.password?.type === "required" && (
                    <p role="alert">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert">Password must be 6 Characters</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p role="alert">
                      Password must one number, one uppercase, one lowercase and
                      one special Characters
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    {...register("confirmPassword", { required: true })}
                    placeholder="Confirm password"
                    className="input input-bordered w-full"
                  />
                  {errors.confirmPassword && (
                    <span>This field is required</span>
                  )}
                </div>
              </div>
              <p>{error}</p>
              <div className="form-control mt-6">
                <input
                  disabled={isSignUpDisabled}
                  className="btn bg-blue-600 text-white"
                  type="submit"
                  value="SignUP"
                />
              </div>
              <p>
                Already have an account?{" "}
                <Link className="text-blue-600 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
