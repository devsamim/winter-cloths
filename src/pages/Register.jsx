import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, manageProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, email, image, password, terms);
    setErrorMessage("");
    setSuccess(false);
    if (!terms) {
      setErrorMessage(
        "Please accept our terms & condition first than Sign Up.."
      );
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters..");
      return;
    }
    const validPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    if (!validPass.test(password)) {
      setErrorMessage(
        "Password should be at least 6 characters, one upper case, one lower case, one special character"
      );

      return;
    }

    //  create user through firebase auth
    createUser(email, password)
      .then((result) => {
        // Signed up
        manageProfile(name, image);
        const user = result.user;
        setSuccess(true);
        toast.success("User Create Successfully..");
        navigate("/");
        e.target.reset();
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setSuccess(false);
      });
  };

  return (
    <div className="w-11/12 mx-auto p-4 mb-8 font-bold">
      <div className="hero bg-base-200 rounded-lg ">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-center p-2 ">Register</h2>
          </div>
          <div className="card bg-base-100 lg:w-[500px] max-w-lg shrink-0 shadow-xl font-bold rounded-none">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control font-bold">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Enter your image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="btn btn-sm absolute right-2 top-11 bg-slate-100 text-xl"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control ">
                <label className="cursor-pointer label justify-start ">
                  <input
                    type="checkbox"
                    name="terms"
                    defaultChecked
                    className="checkbox checkbox-warning"
                  />
                  <span className="label-text ml-3">
                    Accept our terms & condition
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">
                  Register
                </button>
              </div>
            </form>
            {errorMessage && (
              <p className=" text-red-400 text-center mb-4 rounded-lg mx-auto p-2 bg-red-50 m-2">
                {errorMessage}
              </p>
            )}
            {success && (
              <p className="text-green-400 text-center mb-4 rounded-lg mx-auto p-2 bg-green-50 m-2">
                User Created Successfully..
              </p>
            )}
            <p className=" text-center mb-4 rounded-lg mx-auto p-2 bg-blue-50 m-2 ">
              Already have account ? Please{" "}
              <Link className=" p-2 rounded-lg" to="/auth/login">
                <span className="font-bold text-green-400">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
