import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "../src/routes/router";  // 👈 import your router
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <div className="container mx-auto">
        <AppRouter />  
      </div> 
    </BrowserRouter>
  </StrictMode>
);
