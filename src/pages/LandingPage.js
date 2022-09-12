import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { loginWithPopup, loginWithRedirect, getAccessTokenSilently } = useAuth0();

  const silentAuthentication = async () => {
    try {
      const token = await getAccessTokenSilently()
      alert(token)
    } catch(error) {
      console.log(error)
      alert('Login required')
    }
  }

  return (
    <>
      <button onClick={async () => {
        await loginWithPopup();
        navigate("/dashboard")
      }}>
        Login via Popup
      </button>
      <br/>
      <br/>
      <button onClick={() => loginWithRedirect()}>
        Login via Redirect
      </button>
      <br/>
      <br/>
      <button onClick={async () => silentAuthentication()}>
        Silent Authentication
      </button>
    </>
  );
};
