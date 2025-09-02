import React from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <i className="pi pi-exclamation-triangle notfound-icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button
          label="Go Home"
          icon="pi pi-home"
          className="p-button-rounded p-button-info"
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </div>
  );
};

export default NotFound;
