import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const { signInUser, signInWithGoogle, currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/"); // Redirect to home or dashboard
    }
  }, [currentUser, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("User Login Successfully");
        e.target.reset();
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("User Login Successfully");
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-11/12 mx-auto p-4 mb-8 font-bold">
      <div className="hero">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-center p-2">Login</h2>
          </div>
          <div className="card bg-base-100 lg:w-[500px] max-w-lg rounded-none shrink-0 shadow-xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/auth/forgotPassword"
                    state={{ email }}
                    className="label-text-alt link link-hover text-red-300"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Login</button>
              </div>
              <div className="flex gap-x-2 p-2 mx-auto">
                <button
                  type="button"
                  onClick={handleSignInGoogle}
                  className="mt-4 flex items-center p-4 rounded-lg bg-yellow-100 text-blue-600 text-xl hover:bg-yellow-300 "
                >
                  Sign In with Google
                  <FcGoogle className="ml-2 text-xl" />
                </button>
              </div>
            </form>

            <p className="text-center mb-8 rounded-lg mx-auto p-2 bg-blue-50 m-2">
              New user? Please{" "}
              <Link className="text-red-500 p-2 rounded-lg" to="/auth/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
