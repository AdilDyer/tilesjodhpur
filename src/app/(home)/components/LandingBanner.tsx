import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";

const LandingBanner = () => {
  return (
    <div className="homeLandingBanner">
      <div className="imgDiv">
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1729251953/Screenshot_2024-10-18_at_5.15.41_PM_t40sjs.png"
          alt=""
        />
      </div>
      <div className="textDiv">
        <h1>Crafting homes,</h1>
        <h1>One Tile at a Time.</h1>
        <br />
        <p>
          Featuring over 300+ categories and 1,000 variants of shades — <br />{" "}
          We are the{" "}
          <span style={{ color: "goldenrod" }}> Leading distributor</span> of
          remarkably Crafted Ceramics in
          <span style={{ color: "blue" }}> Jodhpur</span>.
        </p>
        <br />
        <div className="buttonsDiv">
          <Link href={"/contact"}>
            <Button id="contactBtn" variant="outline-dark">
              Contact
            </Button>
          </Link>
          <Button variant="dark" id="catalogueBtn">
            Catalogues
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
