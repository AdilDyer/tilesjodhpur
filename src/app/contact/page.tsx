"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import RecaptchaComponent from "../components/Recaptcha";
import { Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: "",
  });
  const [verified, setVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // Update formData state when user types in inputs
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    if (verified) {
      // API call to submit data
      const res = await fetch("/api/submitQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      const data = await res.json();
      if (!data.success) {
        alert("There was an error submitting your message. Please try again.");
        return;
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        message: "",
      });
      alert("Your message has been sent successfully.");
    } else {
      alert("Please complete the CAPTCHA to proceed.");
    }
    setSubmitting(false);
    setVerified(false);
  };
  return (
    <div className="contactus">
      <h1>Contact Us</h1>
      <div className="upContainer">
        <div className="leftPart">
          <h2>
            GALAXY TILES & <br />
            CERAMICS
          </h2>
          <p>
            8-C-46, Near Lucky International School, <br />
            Kudi Bhagtasni Housing Board, <br />
            Vivek Vihar Yojana,
            <br /> Jodhpur, Rajasthan 342005
            <br />
            <br />
            Email :
            <br />
            abc@gmail.com <br />
            <br />
            Phone : <br />
            +91 9292929292
            <br />
            <p>Mr. Nikheel Jain</p>
          </p>
        </div>
        <div className="rightPart">
          <form onSubmit={handleSubmit}>
            <div>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Phone No"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <Form.Select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                aria-label="Select Your State"
              >
                <option>Select Your State</option>
                <option value="Outside India">Outside India</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu Kashmir">Jammu Kashmir</option>
                <option value="Goa">Goa</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli">
                  Dadra and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </Form.Select>
            </div>
            <div>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <RecaptchaComponent verified={verified} setVerified={setVerified} />
            <Button type="submit" variant="dark">
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
      <div className="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.711037083134!2d73.02964817563932!3d26.20607667707537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b53a253c945%3A0xbc34005bddb310c!2sGALAXY%20TILES%20%26%20CERAMIC!5e0!3m2!1sen!2sin!4v1729342779150!5m2!1sen!2sin"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
