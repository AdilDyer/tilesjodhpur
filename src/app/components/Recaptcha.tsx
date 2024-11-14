"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = ({ verified, setVerified }: any) => {
  const handleCaptchaResponse = async (response: string | null) => {
    if (response) {
      try {
        // Send the captcha token to the backend for verification
        const res = await fetch("/api/verifyCaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: response }),
        });

        const data = await res.json();

        if (data.success) {
          console.log("CAPTCHA verified successfully");
          setVerified(true);
        } else {
          console.log("CAPTCHA verification failed");
          setVerified(false);
        }
      } catch (error) {
        console.error("Error verifying CAPTCHA", error);
        setVerified(false);
      }
    } else {
      console.log("No CAPTCHA response received");
      setVerified(false);
    }
  };

  return (
    <div className="reCaptchaDiv">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        onChange={handleCaptchaResponse}
      />
    </div>
  );
};

export default RecaptchaComponent;
