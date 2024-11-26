import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="line1">
        <div className="imgDiv">
          <img
            src="https://t4.ftcdn.net/jpg/04/53/48/35/360_F_453483571_3f042fk3eWCrmw05WflZyIe60Wv20XiM.jpg"
            alt=""
          /> 
        </div>
        <div className="columns">
          <div className="col">
            <h6>QUICK LINKS</h6>
            <p>Tile Calculator</p>
            <p>Area Calculator</p>
            <p>Paint Calculator</p>
            <p>Cost Calculator</p>
            <p>Cost Calculator</p>
          </div>
          <div className="col">
            <h6>TOOLS</h6>
            <p>Tile Calculator</p>
            <p>Area Calculator</p>
            <p>Paint Calculator</p>
            <p>Cost Calculator</p>
          </div>
          <div className="col">
            <h6>BY CATEGORIES</h6>
            <p>Tile Calculator</p>
            <p>Area Calculator</p>
            <p>Paint Calculator</p>
            <p>Cost Calculator</p>
            <p>Paint Calculator</p>
            <p>Cost Calculator</p>
          </div>{" "}
          <div className="col">
            <h6>BY FINISHES</h6>
            <p>Tile Calculator</p>
            <p>Area Calculator</p>
            <p>Paint Calculator</p>
            <p>Cost Calculator</p>
          </div>
        </div>
      </div>
      <div className="line2">
        <div className="socials">
          <a
            target="_blank"
            href="https://www.facebook.com/"
            style={{ color: "#1877F2" }}
          >
            <i className="fab fa-facebook-f"></i>
            Facebook
          </a>
          <br />
          <a
            target="_blank"
            href="https://www.instagram.com/"
            style={{ color: "#E1306C" }}
          >
            <i className="fab fa-instagram"></i>
            Instagram
          </a>
          <br />
          <a
            target="_blank"
            href="https://www.twitter.com/"
            style={{ color: "#1DA1F2" }}
          >
            <i className="fab fa-twitter"></i>
            Twitter
          </a>
          <br />
          <a
            target="_blank"
            href="https://www.linkedin.com/"
            style={{ color: "#0077B5" }}
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
        <div className="queryAndMap">
          <div className="contact">
            <p>
              <strong>For Queries : </strong>
              <br />
              Mr. Anil Bagora <br />
              +91 9252104920 <br /> dlkjad@gmail.com
              <br />
              Near Kisan Bhawan, Jodhpur, Rajasthan 342005
            </p>
            <br />
            <p style={{ fontWeight: "bolder" }}>
              Galaxy Tiles and Ceramics, Jodhpur &copy; 2024 <br />
              All Rights Reserved. <br />
            </p>
          </div>
          <div className="mapContainer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.711037083134!2d73.02964817563932!3d26.20607667707537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b53a253c945%3A0xbc34005bddb310c!2sGALAXY%20TILES%20%26%20CERAMIC!5e0!3m2!1sen!2sin!4v1729342779150!5m2!1sen!2sin"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
