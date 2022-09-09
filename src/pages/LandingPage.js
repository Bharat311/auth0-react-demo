import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { loginWithPopup, loginWithRedirect } = useAuth0();

  return (
    <>
      <button onClick={async () => {
        await loginWithPopup();
        console.log('back here');
        navigate("/dashboard")
      }}>
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
