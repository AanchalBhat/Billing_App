import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="links">
        <Link to="/dashboard" className="nav-links">
          Home
        </Link>
        <Link to="/billing" className="nav-links">
          Billing
        </Link>
        <Link to="/invoice" className="nav-links">
          Invoices
        </Link>
        <Link to="/" className="nav-links">
          Logout
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
