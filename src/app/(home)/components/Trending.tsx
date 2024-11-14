"use client";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Trending = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller-inner`
          scrollerContent.forEach((item: any) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);
  return (
    <div className="homeTrending">
      <div className="topPart">
        <h1>Mesmerizing Range Of Trending Ceramics</h1>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          nesciunt eaque ullam, est aperiam praesentium. Quisquam pariatur
          suscipit beatae sunt voluptas earum modi officiis nihil, hic quis
          facilis ipsum. Facilis.
        </p>
      </div>
      <div className="bottomPart">
        <div className="galleryLinesDiv">
          <div id="container">
            <div className="photobanner">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div id="container">
            <div className="photobanner">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/herringbone-style-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/leafy-vine-tile-floor-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/classic-black-and-white-hall-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/wood-look-house-tiles-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/colour-it-down-home-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/herringbone-style-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/leafy-vine-tile-floor-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/classic-black-and-white-hall-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/wood-look-house-tiles-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/colour-it-down-home-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div id="container">
            <div className="photobanner">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div id="container">
            <div className="photobanner">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/herringbone-style-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/leafy-vine-tile-floor-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/classic-black-and-white-hall-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/wood-look-house-tiles-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/colour-it-down-home-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/herringbone-style-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/leafy-vine-tile-floor-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/classic-black-and-white-hall-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/wood-look-house-tiles-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/colour-it-down-home-tile-design.jpg"
                alt=""
                loading="lazy"
              />
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
