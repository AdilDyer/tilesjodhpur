import React from "react";
import { Button } from "react-bootstrap";

const Catalogue = () => {
  return (
    <div className="catalogue">
      <h1>Catalogues</h1>
      <div className="card">
        <div className="imgPart">
          <img
            src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
            alt=""
          />
        </div>
        <div className="textPart">
          <h4>Catelogue-1</h4>
          <Button variant="light">
            <i className="fa-solid fa-download"></i>
          </Button>
        </div>
      </div>
      <div className="card">
        <div className="imgPart">
          <img
            src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
            alt=""
          />
        </div>
        <div className="textPart">
          <h4>Catelogue-1</h4>
          <Button variant="light">
            <i className="fa-solid fa-download"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
