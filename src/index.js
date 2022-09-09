import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider/>
    {/* <Auth0Provider
      domain="sm-development-bharat.us.auth0.com"
      clientId="SZ16hP1P9CiaI2LLyR10kTPKqtX2ss65"
      redirectUri={window.location.origin}
    >
      <RouterProvider />
    </Auth0Provider> */}
  </React.StrictMode>
);
