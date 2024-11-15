"use client";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Collections = () => {
  // State to manage min and max price
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  // Handle changes to min and max price
  const handleMinPriceChange = (e: any) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: any) => {
    setMaxPrice(Number(e.target.value));
  };
  return (
    <div className="collections">
      <div className="topHeadings">
        <h1>Collections</h1>
        <h4>by The Galaxy Tiles</h4>
      </div>
      <div className="boxContainer">
        <div className="leftPart">
          <div className="topPart">
            <h6>
              <strong>FILTERS</strong>
            </h6>
          </div>
          <div className="bottomMenu">
            <div className="filterBoxChecks">
              <h6>
                <strong>CATEGORIES</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Bedroom"} />
                  <Form.Check type={"checkbox"} label={"Living Room"} />
                  <Form.Check type={"checkbox"} label={"Bathroom"} />
                  <Form.Check type={"checkbox"} label={"Commercial Spaces"} />
                  <Form.Check type={"checkbox"} label={"Outdoor"} />
                  <Form.Check type={"checkbox"} label={"Kitchen"} />
                </Form>
              </div>
            </div>
            {/* <div className="filterBoxRange">
              <h6>
                <strong>PRICE</strong>
              </h6>
              <Form.Range />
            </div> */}
            <div className="filterBoxRange">
              <h6>
                <strong>PRICE</strong>
              </h6>
              <Form>
                <div className="d-flex justify-content-between">
                  <Form.Group>
                    <Form.Label>Min Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Max Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </Form.Group>
                </div>
              </Form>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>FINISHES</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Polished"} />
                  <Form.Check type={"checkbox"} label={"Glossmatt"} />
                  <Form.Check type={"checkbox"} label={"Carving"} />
                  <Form.Check type={"checkbox"} label={"Superwhite"} />
                  <Form.Check type={"checkbox"} label={"Matt"} />
                  <Form.Check type={"checkbox"} label={"Metalic"} />
                  <Form.Check type={"checkbox"} label={"Marbletech"} />
                  <Form.Check type={"checkbox"} label={"Rotomatt"} />
                </Form>
              </div>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>COLORS</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Blue"} />
                  <Form.Check type={"checkbox"} label={"Red"} />
                  <Form.Check type={"checkbox"} label={"White"} />
                  <Form.Check type={"checkbox"} label={"Black"} />
                  <Form.Check type={"checkbox"} label={"Green"} />
                </Form>
              </div>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>SIZES (in ft.)</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"2x1"} />
                  <Form.Check type={"checkbox"} label={"4x2"} />
                  <Form.Check type={"checkbox"} label={"8x4"} />
                  <Form.Check type={"checkbox"} label={"16x8"} />
                  <Form.Check type={"checkbox"} label={"32x4"} />
                </Form>
              </div>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>BRANDS</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Djkastras"} />
                  <Form.Check type={"checkbox"} label={"Raymond"} />
                  <Form.Check type={"checkbox"} label={"Bata"} />
                  <Form.Check type={"checkbox"} label={"Jupyter"} />
                  <Form.Check type={"checkbox"} label={"Harmony"} />
                </Form>
              </div>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>DESIGNS</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Modern"} />
                  <Form.Check type={"checkbox"} label={"Classic"} />
                  <Form.Check type={"checkbox"} label={"Matrix"} />
                  <Form.Check type={"checkbox"} label={"Checked"} />
                  <Form.Check type={"checkbox"} label={"Abstract"} />
                </Form>
              </div>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>MATERIAL</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Earthenware"} />
                  <Form.Check type={"checkbox"} label={"Stoneware"} />
                  <Form.Check type={"checkbox"} label={"Porcelain Clay"} />
                  <Form.Check type={"checkbox"} label={"Ball Clay"} />
                  <Form.Check type={"checkbox"} label={"Kaolin (China Clay)"} />
                </Form>
              </div>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>APPLICATION AREAS</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Floor"} />
                  <Form.Check type={"checkbox"} label={"Wall"} />
                  <Form.Check type={"checkbox"} label={"Roof"} />
                </Form>
              </div>
            </div>
            <div className="filterBoxChecks">
              {" "}
              <h6>
                <strong>ONLY PREMIUM TILES</strong>
              </h6>
              <div className="checks">
                <Form>
                  <Form.Check type={"checkbox"} label={"Yes"} />
                </Form>
              </div>
            </div>
            <div className="clearFilter">
              {" "}
              <Button variant="light">
                <i className="fa-regular fa-circle-check"></i> &nbsp;Clear All
                Filters
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPart">
          <div className="topPart">
            <div className="searchBox">
              <Form>
                <Form.Control type="text" placeholder="Search" />
              </Form>
            </div>
            <div className="sortBox">
              <DropdownButton
                id="dropdown-basic-button"
                title="Relevance &nbsp;&nbsp;"
                variant="light"
              >
                <Dropdown.Item href="#/action-1">
                  Price -- Low to High
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Price -- High to Low
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Newest First</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="collectionCards">
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /-</h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
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
                <h4>Homebrew Outdoor Tiles Model-x</h4>
                <h5>&#8377; 235 /- </h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
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
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /- </h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
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
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /-</h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
              </div>
            </div>{" "}
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /-</h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
              </div>
            </div>{" "}
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /-</h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
              </div>
            </div>{" "}
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /-</h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
              </div>
            </div>{" "}
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /-</h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
              </div>
            </div>{" "}
            <div className="card">
              <div className="imgPart">
                <img
                  src="https://cms.interiorcompany.com/wp-content/uploads/2024/04/floral-3d-designing-tiles.jpg"
                  alt=""
                />
              </div>
              <div className="textPart">
                <h4>Djkistrax-X Premium Kitchen Tile</h4>
                <h5>&#8377; 235 /-</h5>
                <p>Per Square Mtr.</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, voluptates aut quas perspiciatis, repellendus quia
                  fuga repellat, reiciendis cum minus facere dolore non est
                  dolor? Dicta ex laboriosam inventore qui.
                </p>
              </div>
            </div>
            <div className="bottomNav">
              <Button variant="light">&lt; &nbsp; Previous</Button>
              Page 1 of 1<Button variant="light">Next &nbsp; &gt;</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
