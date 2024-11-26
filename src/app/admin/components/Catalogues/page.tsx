"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";

const Catalogues = () => {
  const [isCatalogueUploaded, setIsCatalogueUploaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCatalogueName, setNewCatalogueName] = useState("");
  const [allCatalogues, setAllCatalogues] = useState([]);
  const [loading, setLoading] = useState(true);
  const newCatalogueNameRef = useRef(newCatalogueName);

  const fetchCatalogues = async () => {
    try {
      const res = await fetch("/api/getCatalogues");
      const data = await res.json();
      setAllCatalogues(data);
    } catch (error) {
      console.error("Error fetching catalogues", error);
    }
  };

  const handleCatalogueUpload = async (url: any) => {
    if (newCatalogueNameRef.current.trim() === "") {
      alert("Please enter a name for the catalogue");
      return;
    }
    setIsSubmitting(true);
    const res = await fetch("/api/submitCatalogue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newCatalogueNameRef.current, url }),
    });

    const data = await res.json();
    if (!data.success) {
      alert("There was an error submitting your request. Please try again.");
      return;
    }
    alert("Catalogue has been submitted successfully.");
    setIsCatalogueUploaded(true);
    setIsSubmitting(false);
    fetchCatalogues();
  };

  const handleCatalogueDelete = async (e: any) => {
    const url = e.target.parentNode.parentNode.firstChild.src;
    const name = e.target.parentNode.parentNode.firstChild.alt;
    const res = await fetch("/api/deleteCatalogue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, name }),
    });

    const data = await res.json();
    if (!data.success) {
      alert("There was an error deleting the catalogue. Please try again.");
      return;
    }
    alert("Catalogue has been deleted successfully.");
    setAllCatalogues(
      allCatalogues.filter((catalogue: any) => catalogue.url !== url)
    );
  };

  // Keep ref updated with the latest state
  useEffect(() => {
    newCatalogueNameRef.current = newCatalogueName;
  }, [newCatalogueName]);

  useEffect(() => {
    // Fetch queries from the backend
    fetchCatalogues();
    setLoading(false);
  }, []);
  if (loading) {
    return (
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
    );
  }
  return (
    <div className="catalogueDiv">
      <h1>
        <strong>Catalogues</strong>
      </h1>
      <div className="newCatalogueUploadDiv">
        {" "}
        <Form.Control
          type="text"
          placeholder="New Catalogue Name"
          onChange={(e) => {
            setNewCatalogueName(e.target.value);
          }}
        />
        <br />
        <CldUploadWidget
          options={{ sources: ["local"], multiple: false }}
          signatureEndpoint="/api/sign-image"
          onSuccess={(result, { widget }) => {
            handleCatalogueUpload(result.info!.secure_url);
            setIsCatalogueUploaded(true);
          }}
          onError={(error, { widget }) => {
            alert("Failed to upload : File Size is larger than 10MB !");
          }}
          onQueuesEnd={(result, { widget }) => {
            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <Button
                onClick={() => open()}
                variant="warning"
                disabled={isCatalogueUploaded}
              >
                {isCatalogueUploaded
                  ? "Catalogue upload successfull."
                  : isSubmitting
                  ? "Submitting"
                  : "Upload new Catalogue"}
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>
      {allCatalogues.map((catalogue: any, index: number) => (
        <div className="card" key={index}>
          <img src={catalogue.url} alt={catalogue.name} />
          <br />
          <h4>
            <strong>{catalogue.name}</strong>
          </h4>
          <div className="btnsDiv">
            <Link href={catalogue.url}>
              <Button variant="light">View</Button>
            </Link>
            <Button onClick={handleCatalogueDelete} variant="outline-danger">
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogues;
