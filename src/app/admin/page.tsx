"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Queries from "./components/Queries/page";
import Catalogues from "./components/Catalogues/page";
import Products from "./components/Products/page";
import { signOut, useSession } from "next-auth/react";

const Admin = () => {
  const [currentRightSide, setCurrentRightSide] = useState("Products");
  const { data: session } = useSession();

  const handleTabClick = (tabName: string) => {
    setCurrentRightSide(tabName);
  };

  if (!session) {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Loading...</p>
        </div>
      </>
    ); // This covers the loading case
  }

  return session?.user?.isAdmin ? (
    <div className="admin">
      <div className="leftPart">
        <div className="topPart">
          <h2>
            <strong>ADMIN-DASH</strong>
          </h2>
          <p>The Galaxy Tiles</p>
        </div>
        <div className="bottomMenu">
          <Button
            variant="light"
            className="btn btn-lg"
            onClick={() => handleTabClick("Queries")}
          >
            <strong>
              <i className="fa-solid fa-circle-question"></i> &nbsp; Queries
            </strong>
          </Button>
          {/* <Button
            variant="light"
            className="btn btn-lg"
            onClick={() => handleTabClick("Homepage")}
          >
            <strong>
              <i className="fa-solid fa-house"></i> &nbsp;Homepage
            </strong>
          </Button> */}
          <Button
            variant="light"
            className="btn btn-lg"
            onClick={() => handleTabClick("Catalogues")}
          >
            <strong>
              <i className="fa-solid fa-book-open"></i> &nbsp;Catalogues
            </strong>
          </Button>
          <Button
            variant="light"
            className="btn btn-lg"
            onClick={() => handleTabClick("Products")}
          >
            <strong>
              <i className="fa-solid fa-box"></i> &nbsp; Products
            </strong>
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <strong>
              <i className="fa-solid fa-key"></i> &nbsp; Logout
            </strong>
          </Button>
          {/* <Button variant="light" className="btn btn-lg">
            <strong>
              <i className="fa-solid fa-address-book"></i> &nbsp;Contact
            </strong>
          </Button> */}
        </div>
      </div>
      <div className="rightPart">
        {currentRightSide === "Queries" && <Queries></Queries>}
        {currentRightSide === "Catalogues" && <Catalogues></Catalogues>}
        {currentRightSide === "Products" && <Products></Products>}
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Admin;
