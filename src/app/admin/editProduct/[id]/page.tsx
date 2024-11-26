"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

const InputList = ({ label, productDetails, setProductDetails, listKey }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (!inputValue) {
      alert(`Please enter a ${label.toLowerCase()}.`);
      return;
    }
    if (!productDetails[listKey].includes(inputValue)) {
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [listKey]: [...prevDetails[listKey], inputValue],
      }));
      setInputValue("");
    } else {
      alert(`This ${label.toLowerCase()} has already been added.`);
    }
  };

  return (
    <div className="inputDiv">
      <Form.Group controlId={`tile${label}`}>
        <Form.Label>Enter {label}</Form.Label>
        <div className="d-flex align-items-center">
          <Form.Control
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ width: "100px", marginRight: "10px" }}
          />
          <Button variant="light" size="sm" onClick={handleAddItem}>
            <i className="fa-solid fa-plus"></i>
          </Button>
        </div>
      </Form.Group>
      <br />
      <p>Selected {label}s:</p>
      <ListGroup>
        {productDetails &&
          productDetails[listKey].map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between"
            >
              <span>{item}</span>&nbsp; &nbsp;
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() =>
                  setProductDetails((prevDetails) => ({
                    ...prevDetails,
                    [listKey]: prevDetails[listKey].filter((i) => i !== item),
                  }))
                }
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
};
const EditProduct = ({ params }) => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    description: "",
    brand: "",
    images: [],
    categories: [],
    colors: [],
    finishing: [],
    designs: [],
    sizes: [],
    materials: [],
    applicationAreas: [],
    isPremium: false,
  });

  const router = useRouter();
  const { id } = params;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      categories: checked
        ? [...prevDetails.categories, value]
        : prevDetails.categories.filter((cat) => cat !== value),
    }));
  };

  const handleFinishingChange = (e) => {
    const { value, checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      finishing: checked
        ? [...prevDetails.finishing, value]
        : prevDetails.finishing.filter((fin) => fin !== value),
    }));
  };

  const handlePremiumChange = (e) => {
    const { checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      isPremium: checked,
    }));
  };

  const handleSubmit = async () => {
    // if (
    //   !productDetails.name ||
    //   !productDetails.price ||
    //   !productDetails.brand
    // ) {
    //   alert("Please fill in all required fields: Name, Price, and Brand.");
    //   return;
    // }

    if (productDetails.images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    // Create the payload for submission
    const payload = {
      name: productDetails.name,
      price: productDetails.price,
      description: productDetails.description,
      brand: productDetails.brand,
      images: productDetails.images,
      categories: productDetails.categories,
      colors: productDetails.colors,
      finishing: productDetails.finishing,
      designs: productDetails.designs,
      sizes: productDetails.sizes,
      materials: productDetails.materials,
      applicationAreas: productDetails.applicationAreas,
      isPremium: productDetails.isPremium,
    };

    try {
      // Send the POST request
      const response = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the product. Please try again.");
      }

      const result = await response.json();
      alert("Product added successfully.");

      //navigate the user to path /admin

      router.push("/admin");
    } catch (error) {
      console.error("Error submitting the product:", error);
      alert("Error submitting the product. Please try again.");
    }
  };

  useEffect(() => {
    if (!id) return; // If id is not available, do not attempt to fetch the data
    const fetchProductData = async () => {
      try {
        const response = await fetch(`/api/getProducts/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        console.log(data);
        // setProductDetails(data.product);
        setProductDetails({
          ...data.product,
          images: [], // Overwrite images with an empty array
        });
        // Pre-fill the form with the fetched data
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("Failed to fetch product data.");
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="addProductDiv">
      <h3>
        <strong>Edit Product Details</strong>
      </h3>
      <br />
      <div className="detailsFillingDiv">
        <div className="inputDiv">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={productDetails.name}
            onChange={handleInputChange}
            disabled={true}
          />
        </div>
        <div className="inputDiv">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price Per Sq. Mtr"
            name="price"
            value={productDetails.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputDiv">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Description"
            name="description"
            value={productDetails.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputDiv">
          <Form.Label>Categories</Form.Label>
          <div className="categoriesChecks">
            {[
              "Bedroom",
              "Living Room",
              "Bathroom",
              "Commercial Spaces",
              "Outdoor",
              "Kitchen",
            ].map((category) => (
              <Form.Check
                key={category}
                type="checkbox"
                label={category}
                value={category}
                checked={productDetails.categories.includes(category)}
                onChange={handleCategoryChange}
              />
            ))}
          </div>
        </div>
        <div className="inputDiv">
          <Form.Label>Finishing</Form.Label>
          <div className="FinishingChecks">
            {[
              "Polished",
              "Glossmatt",
              "Carving",
              "Superwhite",
              "Matt",
              "Metalic",
              "Marbletech",
              "Rotomatt",
            ].map((finish) => (
              <Form.Check
                key={finish}
                type="checkbox"
                label={finish}
                value={finish}
                checked={productDetails.finishing.includes(finish)}
                onChange={handleFinishingChange}
              />
            ))}
          </div>
        </div>
        <InputList
          label="Color"
          productDetails={productDetails}
          setProductDetails={setProductDetails}
          listKey="colors"
        />
        <InputList
          label="Design"
          productDetails={productDetails}
          setProductDetails={setProductDetails}
          listKey="designs"
        />
        <InputList
          label="Size"
          productDetails={productDetails}
          setProductDetails={setProductDetails}
          listKey="sizes"
        />
        <InputList
          label="Material"
          productDetails={productDetails}
          setProductDetails={setProductDetails}
          listKey="materials"
        />
        <InputList
          label="Application Areas"
          productDetails={productDetails}
          setProductDetails={setProductDetails}
          listKey="applicationAreas"
        />

        <div className="inputDiv">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brand"
            name="brand"
            value={productDetails.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputDiv">
          <Form.Label>Is Premium Tile?</Form.Label>
          <Form.Check // prettier-ignore
            type={"checkbox"}
            label={`Yes`}
            checked={productDetails.isPremium}
            onChange={(e) => handlePremiumChange(e)}
          />
        </div>
        <div className="inputDiv">
          <Form.Label>Enter Images (Max 5)</Form.Label>
          <br />
          <CldUploadWidget
            options={{ sources: ["local"], multiple: true }}
            signatureEndpoint="/api/sign-image"
            onSuccess={(result, { widget }) => {
              setProductDetails((prevDetails) => {
                // Check if the max limit has been reached
                if (prevDetails.images && prevDetails.images.length >= 5) {
                  alert("You can only upload up to 5 images.");
                  widget.close();
                  return prevDetails;
                }

                // Add the new image URL to productDetails
                const updatedImages = [
                  ...(prevDetails.images || []),
                  result.info.secure_url,
                ];

                return {
                  ...prevDetails,
                  images: updatedImages,
                };
              });
              setImagesUploaded(true);
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
                  disabled={
                    productDetails.images && productDetails.images.length >= 5
                  }
                >
                  {productDetails.images && productDetails.images.length >= 5
                    ? "Max Uploads Reached"
                    : "Upload Images 🖼️"}
                </Button>
              );
            }}
          </CldUploadWidget>
        </div>
        <div className="submitBtn">
          <Button variant="dark" onClick={handleSubmit}>
            Add Product &nbsp; &nbsp;
            <i className="fa-solid fa-plus"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
