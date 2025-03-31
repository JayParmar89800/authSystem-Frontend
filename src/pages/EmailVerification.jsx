"use client";

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Home } from "react-feather";
import { verificationEmail } from "../action/auth.action";

export default function EmailVerification() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState("loading"); // loading, success, error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await verificationEmail(token);
        if (response?.status ==true) {
          setVerificationStatus("success");
          setMessage(
            response.data.message ||
              "Your email has been successfully verified!"
          );
        } else {
          setVerificationStatus("error");
          setMessage(
            response?.data?.message ||
              "Email verification failed. The link may be invalid or expired."
          );
        }
      } catch (error) {
        setMessage(
          error.response?.data?.message ||
            "Email verification failed. The link may be invalid or expired."
        );
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token]);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          {verificationStatus === "loading" && (
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className="animate-spin h-8 w-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}

          {verificationStatus === "success" && (
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          )}

          {verificationStatus === "error" && (
            <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          )}
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {verificationStatus === "loading" && "Verifying your email..."}
          {verificationStatus === "success" && "Email Verified!"}
          {verificationStatus === "error" && "Verification Failed"}
        </h2>

        <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {verificationStatus === "success" && (
            <div className="space-y-6">
              <button
                type="button"
                className="w-full py-3 px-2 rounded-md bg-green-300"
                onClick={() => navigate("/login")}
              >
                Proceed to Login
              </button>
            </div>
          )}

         

          <div className="mt-6 flex justify-center">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <Home className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
