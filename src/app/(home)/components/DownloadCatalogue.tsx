import React from "react";
import { Button } from "react-bootstrap";

const DownloadCatalogue = () => {
  return (
    <div className="homeDownloadCatalogue">
      <div className="leftPart">
        <h3>Discover the perfect design for your space.</h3>
        <p>
          Download our exclusive catalog and explore endless possibilities
          today.
        </p>
      </div>
      <div className="rightPart">
        <Button className="btn btn-lg" variant="dark">
          Download Catalogues
        </Button>
      </div>
    </div>
  );
};

export default DownloadCatalogue;
