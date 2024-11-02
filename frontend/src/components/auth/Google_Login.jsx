import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode to decode the JWT token

function Google_Login() {
  // Handle successful login
  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential); // Decode the JWT token from Google's response
    console.log("Google User:", decoded); // Log the user's data
  };

  // Handle login failure
  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="827963956521-mt8qnir5dliatuh7oubrv3ke1h9akirc.apps.googleusercontent.com">
      <div>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </GoogleOAuthProvider>
  );
}

export default Google_Login;
