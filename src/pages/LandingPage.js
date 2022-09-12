import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, loginWithRedirect, getAccessTokenSilently, user, logout } = useAuth0();

  const silentAuthentication = async () => {
    try {
      const token = await getAccessTokenSilently()
      alert(token)
    } catch(error) {
      console.log(error)
      alert('Login required')
    }
  }

  const renderAuthenticated = () => (
    <>
      <p>Welcome {user.name}!</p>

      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </>
  )

  const renderUnauthenticated = () => (
    <>
      <button onClick={() => loginWithRedirect()}>
        Login via Redirect
      </button>
    </>
  )

  if (isLoading) {
    return <p>Loading session...</p>
  }

  return (
    <>
      { (isAuthenticated) ? renderAuthenticated() : renderUnauthenticated() }
      <>
        <br/>
        <br/>
        <button onClick={async () => silentAuthentication()}>
          Silent Authentication
        </button>
      </>
    </>
  )
};
