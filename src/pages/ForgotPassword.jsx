import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const emailRef = useRef();
  const location = useLocation();
  const emailFromState = location.state?.email || ""; // Get the email from state

  useEffect(() => {
    // Prefill email if available
    if (emailFromState) {
      emailRef.current.value = emailFromState;
    }
  }, [emailFromState]);

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset link sent successfully!");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="w-9/12 md:w-3/12 mx-auto mt-8 mb-8 flex gap-x-4">
      <input
        ref={emailRef}
        type="email"
        className="w-full rounded-lg p-3"
        placeholder="Enter your email"
      />
      <button onClick={handleForgetPassword} className="btn btn-warning">
        Reset
      </button>
    </div>
  );
};

export default ForgotPassword;
