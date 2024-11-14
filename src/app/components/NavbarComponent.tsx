"use client";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const NavbarComponent = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Navbar>
      <Container>
        <div className="leftPart">
          <Navbar.Brand href="#home">
            <Link href={"/"}>
              <svg
                width="48"
                height="60"
                viewBox="0 0 128 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128 28H96V60H128V28Z" fill="black" />
                <path
                  d="M0 59.9998V31.8268L31.8268 0H59.9998V28.1731L28.1731 59.9998H0Z"
                  fill="black"
                />
                <path
                  d="M48 59.9998V31.8268L79.8268 0H108V28.1731L76.1731 59.9998H48Z"
                  fill="black"
                />
              </svg>
            </Link>
          </Navbar.Brand>
        </div>
        <div className="rightPart">
          <div className="nav-item" onMouseEnter={() => setIsHovering(true)}>
            <Nav.Link>Quick Links</Nav.Link>
            {isHovering && (
              <div
                className="dropdown-menu"
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="columns">
                  <div className="dropdown-section">
                    <h6>BY CATEGORY</h6>
                    <Nav.Link href="/link1">Bedroom Tiles</Nav.Link>
                    <Nav.Link href="/link2">Living Room Tiles</Nav.Link>{" "}
                    <Nav.Link href="/link1">Bathroom Tiles</Nav.Link>
                    <Nav.Link href="/link2">
                      Commercial-Spaces <br /> Tiles
                    </Nav.Link>{" "}
                    <Nav.Link href="/link1">Outdoor Tiles</Nav.Link>
                    <Nav.Link href="/link2">Kitchen Tiles</Nav.Link>
                    <Nav.Link href="/link2">Floor Tiles</Nav.Link>{" "}
                    <Nav.Link href="/link2">Wall Tiles</Nav.Link>
                  </div>
                  <div className="dropdown-section">
                    <h6>BY FINISHES</h6>
                    <Nav.Link href="/link3">Polished</Nav.Link>
                    <Nav.Link href="/link4">Glossmatt</Nav.Link>{" "}
                    <Nav.Link href="/link1">Carving</Nav.Link>
                    <Nav.Link href="/link2">Superwhite</Nav.Link>{" "}
                    <Nav.Link href="/link1">Matt</Nav.Link>
                    <Nav.Link href="/link2">Metallic</Nav.Link>
                    <Nav.Link href="/link2">MarbleTech</Nav.Link>{" "}
                    <Nav.Link href="/link2">Rotomatt</Nav.Link>
                  </div>
                  <div className="dropdown-section">
                    <h6>CUSTOMER TOOLS</h6>
                    <Nav.Link href="/link5">
                      Visual Tile Based Price Calculator
                    </Nav.Link>
                    <Nav.Link href="/link6">Product Comparison Tool</Nav.Link>{" "}
                    <Nav.Link href="/link1">Interactive Color Palette</Nav.Link>
                    <Nav.Link href="/link2">
                      Customer Reviews and Ratings
                    </Nav.Link>{" "}
                    <Nav.Link href="/link1">
                      Installation Guides & Tips
                    </Nav.Link>
                    <Nav.Link href="/link2">Custom Order Request Form</Nav.Link>
                  </div>
                  <div className="dropdown-section">
                    <h6>GENERAL</h6>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/link5">About Us</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>{" "}
                    <Nav.Link href="/link1">Testimonials</Nav.Link>
                    <Nav.Link href="/link1">Collections</Nav.Link>
                    <Nav.Link href="/link1">Send Query</Nav.Link>
                    <Nav.Link href="/ourteam">Our Team</Nav.Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div id="catalogueNav">
            <Nav.Link>Catalogues</Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
