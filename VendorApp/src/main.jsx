import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import ThemeContext from "./context/ThemeContext";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-vngtc1nad2oyyh8k.us.auth0.com"
      clientId="4XUdcI7i0QRRNz0vA5Iw4rMKRvecoZ4f"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <BrowserRouter basename='/'>
        <ThemeContext>
          <App />
        </ThemeContext>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
)




