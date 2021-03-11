import React from "react";
import { Button } from "../Button/Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>FREE</h4>
                <p>no pay</p>
                <ul className="pricing__container-features">
                  <li>50 Notes</li>
                  <li>No offline use</li>
                  <li>No scanning</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Standard</h3>
                <h4>€5.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>1000 Notes</li>
                  <li>Offline use</li>
                  <li>Making teams</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$19.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Unlimited Notes</li>
                  <li>Backups</li>
                  <li>Video calls</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
