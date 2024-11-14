import React from "react";

const WhereBuy = () => {
  return (
    <div className="homeWhereToBuy">
      <div className="textPart">
        <h1>Where To Reach Us ? </h1>
      </div>
      <div className="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.711037083134!2d73.02964817563932!3d26.20607667707537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b53a253c945%3A0xbc34005bddb310c!2sGALAXY%20TILES%20%26%20CERAMIC!5e0!3m2!1sen!2sin!4v1729342779150!5m2!1sen!2sin"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="bottomPart">
        <div className="upPart">
          <h2>Galaxy Tiles & Ceramic Collection, Jodhpur</h2>
          <div className="textDiv">
            <div>
              <p>
                8-C-46, Near Lucky International School, <br />
                Kudi Bhagtasni Housing Board, <br />
                Vivek Vihar Yojana,
                <br /> Jodhpur, Rajasthan 342005
              </p>
              <br />
              <p>
                Email :
                <br />
                abc@gmail.com
              </p>
              <p>
                Phone : <br />
                +91 9292929292
                <p>Mr. Nikheel Jain</p>
              </p>
            </div>
            <div>
              <p>
                For Sales and Business Enquiries, <br />
                Mr. Radhelal Pathak, abc@gmail.com <br />
                +91 9292929292
                <br /> Account Details : <br />
                Bank : ICICI Bank <br /> Account No. : 123456789098090 <br />{" "}
                Branch : Purana Kila, Jodhpur <br />
                Pincode : 313324 <br />
                Address : 8-C-46, Near Lucky International School, <br /> Sadar
                Bazar, Jodhpur
                <br />
              </p>
            </div>
          </div>
          <div className="socials">
            <a target="_blank" href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
              Facebook
            </a>
            <br />
            <a target="_blank" href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <br />
            <a target="_blank" href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            <br />
            <a target="_blank" href="https://www.linkedin.com/">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="rightPart"></div>
      </div>
    </div>
  );
};

export default WhereBuy;
