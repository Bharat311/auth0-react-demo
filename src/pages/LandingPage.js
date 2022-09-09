import { useAuth0 } from "@auth0/auth0-react";

export const LandingPage = () => {
  const { loginWithPopup, loginWithRedirect } = useAuth0();

  return (
    <>
      <button onClick={() => loginWithPopup()}>
        Login via Popup
      </button>
      <br/>
      <br/>
      <button onClick={() => loginWithRedirect()}>
        Login via Redirect
      </button>
    </>
  );
};
