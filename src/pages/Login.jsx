import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../components/LoginSignup/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useRef, useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { signIn, resetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const from = location?.state?.from?.pathname || "/";

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire({
        icon: "success",
        title: "please provide your email to reset password",
        showConfirmButton: true,
        timer: 3000,
      });
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "please chack your email",
          showConfirmButton: true,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
            <h1 className="text-center mt-4 text-3xl font-bold">Login</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  {...register("email", { required: true })}
                  name="email"
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
                    type={passwordVisible ? "text" : "password"}
                    name="password"
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
                  <div>
                    <span
                      onClick={handlePasswordVisible}
                      className="mt-2 border-2 p-3 rounded-lg btn"
                    >
                      {passwordVisible ? "Hide Password" : "Show Password"}
                    </span>
                    <p>
                      <small>
                        Forget Password? please{" "}
                        <button
                          onClick={handleResetPassword}
                          className="btn btn-link"
                        >
                          Reset Password
                        </button>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <input
                  className="btn bg-blue-600 text-white"
                  type="submit"
                  value="Login"
                />
              </div>
              <GoogleLogin />
              <p>
                Do not have an account?{" "}
                <Link className="text-blue-600 font-bold" to="/signup">
                  SignUP
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
