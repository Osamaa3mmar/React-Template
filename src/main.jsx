import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter } from "react-router-dom";
  const value = {
        ripple: true,
        
    };
createRoot(document.getElementById("root")).render(
  
  <PrimeReactProvider value={value}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </PrimeReactProvider>
);
