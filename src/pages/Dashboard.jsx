import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { MdVerified } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-5 mb-4 lg:w-3/12 mx-auto">
        <h2 className="text-bold m-4 p-4 lg:bg-slate-500 bg-blue-800  text-center text-white rounded-lg">
          Welcome to{" "}
          <span className="font-bold text-yellow-200">{user.displayName}</span>
        </h2>
      </div>

      <div className="w-11/12 mx-auto flex items-center justify-center">
        <div className="  card bg-base-100 w-96 shadow-xl  mb-6 ">
          <div className="px-10 pt-10">
            <img
              src={user?.photoURL}
              alt="profile_pic"
              className="w-44 h-44 flex justify-center items-center rounded-full lg:ml-[70px]"
            />
          </div>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Name : {user?.displayName}</h2>
            <h2 className="card-title"> Email : {user?.email}</h2>
            <h2 className="card-title">
              User Status:{" "}
              <>
                {user?.emailVerified ? (
                  <span className="flex items-center">
                    Verified{" "}
                    <MdVerified className="ml-2 text-green-400 text-xl" />
                  </span>
                ) : (
                  <span className="text-sm bg-yellow-300 p-2 rounded-full flex justify-center items-center">
                    Pending <CgDanger className="ml-2 text-xl" />
                  </span>
                )}
              </>
            </h2>
            <p>Are you Update your Profile?</p>
            <div className="card-actions">
              <button
                onClick={() => navigate("/auth/updateProfile")}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
