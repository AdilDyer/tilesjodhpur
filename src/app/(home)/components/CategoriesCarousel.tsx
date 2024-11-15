import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
const CategoryCarousel = () => {
  return (
    <div className="homeSpacesCarousel">
      <div className="textDiv">
        <h1>
          300+ Stunning Collections of Designs <br /> of Various Categories
        </h1>
        <br />
        <br />
        <p>
          Suited exactly for your spaces of Bedroom, Kitchen, Washroom, Outdoor
          and indoor walls etc.{" "}
        </p>
        <br />
        <br />
      </div>
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
            <Link href={"/collections"}>
              <Button variant="dark">Explore More</Button>
            </Link>
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
            <Link href={"/collections"}>
              <Button variant="dark">Explore More</Button>
            </Link>
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
            <Link href={"/collections"}>
              <Button variant="dark">Explore More</Button>
            </Link>
          </div>
        </div>
        <div className="carouselCard">
          <div className="imgPart">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQFWpWffWwSJng/article-cover_image-shrink_720_1280/0/1691038677803?e=2147483647&v=beta&t=Bi4emb4_h5VIWVS3Y3LW6Hs3tzwjZENKOo35F96QsCs"
              alt=""
            />
          </div>
          <div className="textPart">
            <h1>Commercial Spaces</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, voluptates aut quas perspiciatis, repellendus quia fuga
              repellat, reiciendis cum minus facere dolore non est dolor? Dicta
              ex laboriosam inventore qui.
            </p>
          </div>
          <div className="buttonsDiv">
            <Link href={"/collections"}>
              <Button variant="dark">Explore More</Button>
            </Link>
          </div>
        </div>
        <div className="carouselCard">
          <div className="imgPart">
            <img
              src="https://storage.googleapis.com/bc-ai-copywriter.appspot.com/bcrag5cono/blog-images/a04f10da-6e35-4fa4-b446-b2d3f0513a96/revamp-your-spaces-transforming-outdoor-and-indoor-oasis-with-tiles.png"
              alt=""
            />
          </div>
          <div className="textPart">
            <h1>Outdoor</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, voluptates aut quas perspiciatis, repellendus quia fuga
              repellat, reiciendis cum minus facere dolore non est dolor? Dicta
              ex laboriosam inventore qui.
            </p>
          </div>
          <div className="buttonsDiv">
            <Link href={"/collections"}>
              <Button variant="dark">Explore More</Button>
            </Link>
          </div>
        </div>
        <div className="carouselCard">
          <div className="imgPart">
            <img
              src="https://images.jdmagicbox.com/quickquotes/images_main/-5uhr8s6m.jpg"
              alt=""
            />
          </div>
          <div className="textPart">
            <h1>Kitchen</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, voluptates aut quas perspiciatis, repellendus quia fuga
              repellat, reiciendis cum minus facere dolore non est dolor? Dicta
              ex laboriosam inventore qui.
            </p>
          </div>
          <div className="buttonsDiv">
            <Link href={"/collections"}>
              <Button variant="dark">Explore More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
