import React from "react";
import { Link } from "react-router-dom";
import "./seller_login.css";

const Seller_login = () => {
  return (
    <div>
      {/* Seller login section */}
      <div className="seller-login-con">
        <h3 className="text-hili">Log in</h3>
        <form className="gap" action="#">
          <div className="seller-login-input-box">
            <input type="text" placeholder="Company email"></input>
          </div>
          <div className="seller-login-input-box">
            <input type="password" placeholder="Password"></input>
          </div>
          <button className="seller-login-button">Login</button>
        </form>
        <Link to="/Seller_signup">
          <button className="seller-signup-button">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Seller_login;