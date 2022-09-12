import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const [tokens, setTokens] = useState([]);
  const { loginWithPopup, loginWithRedirect, getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   console.log('okay 1')
  //   const getToken = async () => {
  //     console.log('okay 2')
  //     await getAccessTokenSilently(function(data) {
  //       console.log('okay 3')
  //       console.log(data)
  //     })
  //   }
  //   getToken();
  // }, []);

  useEffect(() => {
    const getTokens = async () => {
      console.log('--- 1 ---')
      const tokens = await getAccessTokenSilently(function(token){
        console.log('--- 2 ---')
      });
      console.log('--- 3 ---')
      console.log(tokens)
      setTokens(tokens);
    };

    getTokens(); // run it, run it

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

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
    </>
  );
};
