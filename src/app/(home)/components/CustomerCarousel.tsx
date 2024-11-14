import React from "react";

const CustomerCarousel = () => {
  return (
    <div className="homeCustomerVideosCarousel">
      <div className="textDiv">
        <h1>We have the happiest customers.</h1>
        <br />
        <p>
          We got the chance of making their dream spaces come into true into
          reality.
        </p>
        <br />
        <br />
      </div>
      <div className="carouselDiv">
        <div className="carouselCard">
          <div className="videoPart">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              style={{ maxWidth: "100%", height: "100%" }}
              src="https://res.cloudinary.com/ddxv0iwcs/video/upload/v1718605808/Portrait_Mode_Video_Demo_True_4K_9_16_TEST_tuz5pq.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="carouselCard">
          <div className="videoPart">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              style={{ maxWidth: "100%", height: "100%" }}
              src="https://res.cloudinary.com/ddxv0iwcs/video/upload/v1718605808/Portrait_Mode_Video_Demo_True_4K_9_16_TEST_tuz5pq.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>{" "}
        <div className="carouselCard">
          <div className="videoPart">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              style={{ maxWidth: "100%", height: "100%" }}
              src="https://res.cloudinary.com/ddxv0iwcs/video/upload/v1718605808/Portrait_Mode_Video_Demo_True_4K_9_16_TEST_tuz5pq.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <br />
      <div className="shareFeedbackDiv">
        <p>
          <i className="fa-solid fa-map-location-dot"></i> &nbsp; Kindly share
          your valuable feedback on our{" "}
          <a
            target="_blank"
            href="https://www.google.com/maps/place/GALAXY+TILES+%26+CERAMIC/@26.2060767,73.0296482,17z/data=!3m1!4b1!4m16!1m9!3m8!1s0x39418b53a253c945:0xbc34005bddb310c!2sGALAXY+TILES+%26+CERAMIC!8m2!3d26.2060767!4d73.0322231!9m1!1b1!16s%2Fg%2F11lt_09pss!3m5!1s0x39418b53a253c945:0xbc34005bddb310c!8m2!3d26.2060767!4d73.0322231!16s%2Fg%2F11lt_09pss?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
          >
            handle here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default CustomerCarousel;
