import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName || "");
      setPhotoURL(auth.currentUser.photoURL || "");
    }
  }, []);

  const handleUpdate = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile Updated Successfully");
      navigate("/auth/dashboard");
    } catch (error) {
      console.error("Profile update failed:", error);
      toast.error("Profile Update Failed! your URL to long !! pls short url.");
    }
  };

  return (
    <div className="w-4/12 mx-auto">
      <h1 className="mt-5 mb-4 font-bold text-xl">Update Your Profile</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            className="lg:w-full rounded-lg p-3 mb-4"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            className="lg:w-full rounded-lg p-3 mb-4"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <div className="text-center mt-5 text-xl font-bold">
          <button
            className="btn btn-neutral w-full"
            type="button"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
