import React from "react";
import { Button } from "react-bootstrap";

const Product = () => {
  return (
    <div className="productDiv">
      <div className="boxContainer">
        <div className="topPart">
          <div className="leftPhotos">
            <div className="photo">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
              />
            </div>
            <div className="photo">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
              />
            </div>{" "}
            <div className="photo">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
              />
            </div>{" "}
            <div className="photo">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
              />
            </div>{" "}
            <div className="photo">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="mainPhoto">
            <div className="photoDiv">
              <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                alt=""
              />
            </div>{" "}
            <br />
            <br />
            <Button variant="outline-dark">
              Place a Call <i className="fa-solid fa-phone-flip"></i>
            </Button>
          </div>
          <div className="rightDetails">
            <br />
            <h5>
              <strong>DETAILS</strong>
            </h5>
            <br />
            <p>
              <strong>NAME</strong>: Djkstra-X Safestone
            </p>
            <p>
              <strong>FINISH</strong>: Djkstra-X Safestone
            </p>
            <p>
              <strong>SIZE</strong>: Djkstra-X Safestone
            </p>
            <hr />
            <p>
              <strong>DESCRIPTION</strong>: Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Adipisci nisi tempore possimus magni
              omnis fuga, quia non, deserunt quaerat doloribus consequuntur
              dolore repellat quod temporibus molestias sunt asperiores
              provident autem.
            </p>
            <hr />
            <p>
              <strong>PRICE</strong>: Djkstra-X Safestone
            </p>
            <p>
              <strong>DESIGN</strong>: Djkstra-X Safestone
            </p>
            <p>
              <strong>MATERIAL</strong>: Djkstra-X Safestone
            </p>
            <p>
              <strong>APPLICATION AREAS</strong>: Djkstra-X Safestone
            </p>
          </div>
        </div>

        <div className="bottomPart">
          <hr />
          <h4>
            <strong>USE A TOOL :</strong>{" "}
          </h4>
          <br />
          <div className="tools">
            <Button variant="outline-dark" className="btn btn-lg">
              Cost Calculator <i className="fa-solid fa-calculator"></i>
            </Button>
            <Button variant="outline-dark" className="btn btn-lg">
              High Resolution Images <i className="fa-solid fa-image"></i>
            </Button>
            <Button variant="outline-dark" className="btn btn-lg">
              Download Catalogue <i className="fa-solid fa-download"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
