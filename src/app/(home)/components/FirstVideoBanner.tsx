import React from "react";

const FirstVideoBanner = () => {
  return (
    <div className="homeVideoBanner">
      <video
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        style={{ maxWidth: "100%", height: "100%" }}
        src="https://res.cloudinary.com/ddxv0iwcs/video/upload/v1723272956/8566605-uhd_2560_1440_30fps_tgmpci.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FirstVideoBanner;
