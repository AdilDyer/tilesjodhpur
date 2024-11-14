"use client";
import React, { useState } from "react";

const Finishes = () => {
  const [selectedFinishImage, setSelectedFinishImage] = useState(
    "https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
  );
  const handleImageSelect = (finishType: string) => {
    setSelectedFinishImage(finishType);
  };
  return (
    <div className="homeFinishesDiv">
      <div className="leftPart">
        <h1>Types of Finishes</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          repellendus quos sit eligendi dolorem officiis. Dignissimos ullam
        </p>
        <br />
        <div className="finishesList">
          <div
            className="finishCard Polished"
            onMouseEnter={() =>
              handleImageSelect(
                "https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
              )
            }
          >
            <h5>Polished</h5>
          </div>
          <div
            className="finishCard Glossmatt"
            onMouseEnter={() =>
              handleImageSelect(
                "https://www.lavishceramics.com/wp-content/webp-express/webp-images/uploads/2023/10/LATINA-BROWN.jpg.webp"
              )
            }
          >
            <h5>Glossmatt</h5>
          </div>
          <div
            className="finishCard Carving"
            onMouseEnter={() =>
              handleImageSelect(
                "https://news.saniglaze.com/hs-fs/hubfs/AdobeStock_329842743.jpeg?width=3648&name=AdobeStock_329842743.jpeg"
              )
            }
          >
            <h5>Carving</h5>
          </div>
          <div
            className="finishCard Superwhite"
            onMouseEnter={() =>
              handleImageSelect(
                "https://images.orientbell.com/media/catalog/product/c/r/craftclad_linear_stone_grey_1.jpg"
              )
            }
          >
            <h5>Superwhite</h5>
          </div>
          <div
            className="finishCard Matt"
            onMouseEnter={() =>
              handleImageSelect(
                "https://www.kajariaceramics.com/assets/images/rustic.jpg"
              )
            }
          >
            <h5>Matt</h5>
          </div>
          <div
            className="finishCard Metalic"
            onMouseEnter={() =>
              handleImageSelect(
                "https://www.kajariaceramics.com/assets/images/rotomatt.jpg"
              )
            }
          >
            <h5>Metalic</h5>
          </div>
          <div
            className="finishCard Marbletech"
            onMouseEnter={() =>
              handleImageSelect(
                "https://www.kajariaceramics.com/assets/images/marbletech.jpg"
              )
            }
          >
            <h5>Marbletech</h5>
          </div>
          <div
            className="finishCard Rotomatt"
            onMouseEnter={() =>
              handleImageSelect(
                "https://www.kajariaceramics.com/assets/images/superwhite.jpg"
              )
            }
          >
            <h5>Rotomatt</h5>
          </div>
        </div>
      </div>
      <div className="rightPart">
        <img src={selectedFinishImage} alt="" />
      </div>
    </div>
  );
};

export default Finishes;
