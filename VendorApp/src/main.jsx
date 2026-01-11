// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import  ThemeContext  from "./context/ThemeContext"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
        <ThemeContext>          
          <App />          
        </ThemeContext>
    </BrowserRouter>
  </StrictMode>,
)