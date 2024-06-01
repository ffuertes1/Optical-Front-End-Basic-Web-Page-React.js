import React from "react";
import "./Header.css"; // Ensure your CSS file is set up for any additional custom styling

function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <img src="Screenshot 2024-05-28 185504.png" alt="Logo" className="logo" />
      {/*<img src="acec35290a8ce3d74a0eb6f61b574510.png" alt="Center Image" className="center-image" />*/}

      <div class="widget-wrap">
        <div class="widget-heading">
          <h5 class="heading-title">Call for an Appointment</h5>
        </div>
        <div class="widget-button">
          <a
            class="call-button"
            href="tel:939-337-0012"
            onclick="reportConversion('tel:9393370012');"
          >
            <span>939-337-0012</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
