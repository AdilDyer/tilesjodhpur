import React from "react";
import { Button } from "react-bootstrap";
const WallTilesSpecific = () => {
  return (
    <div className="wallTilesSpecific">
      <div className="homeStateOfTheArtDiv">
        <div className="leftPart">
          <div className="heading">
            <p>STATE OF THE ART COLLECTION OF</p>
            <h1>
              Ceramics &
              <br />
              Tiles
            </h1>
          </div>

          <div className="desc">
            <p>
              We pride ourselves on providing tiles that are not just
              aesthetically pleasing, but also durable, eco-friendly, and
              designed to withstand the test of time. <br /> Our ceramics
              embrace the latest technological advancements, ensuring you get
              products that are as functional as they are beautiful. <br />
              <br /> From sleek, minimalist designs to bold, artistic
              expressions, we offer something for every taste and every project.
            </p>
          </div>
          <div className="buttons">
            <Button variant="outline-light">Explore All</Button>
          </div>
        </div>
        <div className="rightPart">
          <div className="cardsContainer">
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h1>DekastrasX</h1>
                <p>for Bathroom </p>
              </div>
            </div>{" "}
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://images.orientbell.com/media/catalog/product/c/r/craftclad_mosaic_4x8_beige.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h1>Model-DekastrasX</h1>
                <p>for Bathroom </p>
              </div>
            </div>{" "}
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-tiles/_jcr_content/root/container/container_2072089177/teaser_copy_1723289186.coreimg.jpeg/1711520552845/types-of-tiles-3.jpeg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h1>OmniDekastrasX</h1>
                <p>for Bathroom </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallTilesSpecific;
