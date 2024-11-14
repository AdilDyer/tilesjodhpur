import React from "react";
import { Button } from "react-bootstrap";
const WhatsHappening = () => {
  return (
    <div className="homeWhatsHappening">
      <h4>What&apos;s happening @ Galaxy Tiles ?</h4>
      <div className="carouselDiv">
        <div className="carouselCard">
          <div className="imgPart">
            <img
              src="https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/1real-homes-in-1669021353-jiSjM/ond-2022-1669032781-pWI47/tile-design-1669032791-8peJg/d-intd-ond2022-0214-1671014372-ggACt/rac01657-1-1671014389-P47Jj.jpg"
              alt=""
            />
          </div>
          <div className="textPart">
            <h1>Bedroom</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, voluptates aut quas perspiciatis, repellendus quia fuga
              repellat, reiciendis cum minus facere dolore non est dolor? Dicta
              ex laboriosam inventore qui.
            </p>
          </div>
          <div className="buttonsDiv">
            <Button variant="dark">Explore More</Button>
          </div>
        </div>
        <div className="carouselCard">
          <div className="imgPart">
            <img
              src="https://d2ki7eiqd260sq.cloudfront.net/three-d-rendering-modern-dining-room-living112831a4-3744-44a5-af44-3c57069a1780.jpg"
              alt=""
            />
          </div>
          <div className="textPart">
            <h1>Living Room</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, voluptates aut quas perspiciatis, repellendus quia fuga
              repellat, reiciendis cum minus facere dolore non est dolor? Dicta
              ex laboriosam inventore qui.
            </p>
          </div>
          <div className="buttonsDiv">
            <Button variant="dark">Explore More</Button>
          </div>
        </div>
        <div className="carouselCard">
          <div className="imgPart">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2020/9/AT/KD/KM/114026181/rangoli-tiles.jpg"
              alt=""
            />
          </div>
          <div className="textPart">
            <h1>Bathroom</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, voluptates aut quas perspiciatis, repellendus quia fuga
              repellat, reiciendis cum minus facere dolore non est dolor? Dicta
              ex laboriosam inventore qui.
            </p>
          </div>
          <div className="buttonsDiv">
            <Button variant="dark">Explore More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsHappening;
