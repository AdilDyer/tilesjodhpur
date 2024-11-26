// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import Table from "react-bootstrap/Table";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("/api/getProducts");
//       const data = await res.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products", error);
//       setLoading(false);
//     }
//   };

//   // Delete a product by ID
//   const deleteProduct = async (id) => {
//     try {
//       const res = await fetch(`/api/deleteProduct/${id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setProducts((prevProducts) =>
//           prevProducts.filter((product) => product._id !== id)
//         );
//         let data = await res.json();
//         alert(data.message);
//       } else {
//         console.error("Failed to delete product");
//       }
//     } catch (error) {
//       console.error("Error deleting product", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div
//         style={{
//           width: "100%",
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <p>Loading...</p>
//       </div>
//     );
//   }
//   return (
//     <div className="productsDiv">
//       <div className="heading">
//         <h2>
//           <strong>Products</strong>
//         </h2>
//         <Link href="/admin/addproduct">
//           <Button variant="warning">
//             <strong>
//               Add New Product
//               <i className="fa-solid fa-plus"></i>
//             </strong>
//           </Button>
//         </Link>
//       </div>
//       <br />
//       <div className="productsTable">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Category</th>
//               <th>Finishing</th>
//               <th>Description</th>
//               <th>Images</th>
//               <th>Brand</th>
//               <th>Premium</th>
//               <th>Colors</th>
//               <th>Design</th>
//               <th>Size</th>
//               <th>Material</th>
//               <th>Application Area</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.length > 0 ? (
//               products.map((product, index) => (
//                 <tr key={product._id || index}>
//                   <td>{index + 1}</td>
//                   <td>{product.name}</td>
//                   <td>{product.price}</td>
//                   <td>
//                     {product.categories && product.categories.length > 0
//                       ? product.categories.join(", ")
//                       : "N/A"}
//                   </td>
//                   <td>
//                     {product.finishing && product.finishing.length > 0
//                       ? product.finishing.join(", ")
//                       : "N/A"}
//                   </td>
//                   <td>{product.description || "N/A"}</td>
//                   <td>
//                     {product.images && product.images.length > 0
//                       ? product.images.map((img, i) => (
//                           <img
//                             key={i}
//                             src={img}
//                             alt={`Product Image ${i + 1}`}
//                             style={{
//                               width: "50px",
//                               height: "50px",
//                               objectFit: "cover",
//                               margin: "0 5px",
//                             }}
//                           />
//                         ))
//                       : "No images"}
//                   </td>
//                   <td>{product.brand || "N/A"}</td>
//                   <td>{product.isPremium ? "Yes" : "No"}</td>
//                   <td>{product.colors ? product.colors.join(", ") : "N/A"}</td>
//                   <td>
//                     {product.designs ? product.designs.join(", ") : "N/A"}
//                   </td>
//                   <td>{product.sizes ? product.sizes.join(", ") : "N/A"}</td>
//                   <td>
//                     {product.materials ? product.materials.join(", ") : "N/A"}
//                   </td>
//                   <td>
//                     {product.applicationAreas
//                       ? product.applicationAreas.join(", ")
//                       : "N/A"}
//                   </td>
//                   <td>
//                     <Link href={`/admin/editProduct/${product._id}`}>
//                       <Button variant="light" size="sm">
//                         Edit
//                       </Button>
//                     </Link>
//                   </td>
//                   <td>
//                     <Button
//                       size="sm"
//                       variant="outline-danger"
//                       onClick={() => deleteProduct(product._id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="16" className="text-center">
//                   No products available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default Products;

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Select from "react-select";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for filters
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [finishingOptions, setFinishingOptions] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [materialOptions, setMaterialOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFinishings, setSelectedFinishings] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/getProducts");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
      extractOptions(data); // Extract unique options for dropdowns
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
      setLoading(false);
    }
  };

  // Extract unique options for dropdown filters
  const extractOptions = (data) => {
    const categories = [...new Set(data.flatMap((p) => p.categories || []))];
    const finishings = [...new Set(data.flatMap((p) => p.finishing || []))];
    const sizes = [...new Set(data.flatMap((p) => p.sizes || []))];
    const materials = [...new Set(data.flatMap((p) => p.materials || []))];

    setCategoryOptions(categories.map((cat) => ({ value: cat, label: cat })));
    setFinishingOptions(finishings.map((fin) => ({ value: fin, label: fin })));
    setSizeOptions(sizes.map((size) => ({ value: size, label: size })));
    setMaterialOptions(materials.map((mat) => ({ value: mat, label: mat })));
  };

  // Filter products based on selected filters
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        (product.categories &&
          selectedCategories.some((sel) =>
            product.categories.includes(sel.value)
          ));
      const matchesFinishing =
        selectedFinishings.length === 0 ||
        (product.finishing &&
          selectedFinishings.some((sel) =>
            product.finishing.includes(sel.value)
          ));
      const matchesSize =
        selectedSizes.length === 0 ||
        (product.sizes &&
          selectedSizes.some((sel) => product.sizes.includes(sel.value)));
      const matchesMaterial =
        selectedMaterials.length === 0 ||
        (product.materials &&
          selectedMaterials.some((sel) =>
            product.materials.includes(sel.value)
          ));

      return (
        matchesCategory && matchesFinishing && matchesSize && matchesMaterial
      );
    });

    setFilteredProducts(filtered);
  }, [
    selectedCategories,
    selectedFinishings,
    selectedSizes,
    selectedMaterials,
  ]);

  useEffect(() => {
    fetchProducts();
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
    <div className="productsDiv">
      <div className="heading">
        <h2>
          <strong>Products</strong>
        </h2>
        <Link href="/admin/addproduct">
          <Button variant="warning">
            <strong>
              Add New Product
              <i className="fa-solid fa-plus"></i>
            </strong>
          </Button>
        </Link>
      </div>
      <br />
      <div className="productsTable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>
                <Select
                  options={categoryOptions}
                  isMulti
                  onChange={setSelectedCategories}
                />
              </th>
              <th>
                <Select
                  options={finishingOptions}
                  isMulti
                  onChange={setSelectedFinishings}
                />
              </th>
              <th>Description</th>
              <th>Images</th>
              <th>Brand</th>
              <th>Premium</th>
              <th>Colors</th>
              <th>Design</th>
              <th>
                <Select
                  options={sizeOptions}
                  isMulti
                  onChange={setSelectedSizes}
                />
              </th>
              <th>
                <Select
                  options={materialOptions}
                  isMulti
                  onChange={setSelectedMaterials}
                />
              </th>
              <th>Application Area</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr key={product._id || index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    {product.categories && product.categories.length > 0
                      ? product.categories.join(", ")
                      : "N/A"}
                  </td>
                  <td>
                    {product.finishing && product.finishing.length > 0
                      ? product.finishing.join(", ")
                      : "N/A"}
                  </td>
                  <td>{product.description || "N/A"}</td>
                  <td>
                    {product.images && product.images.length > 0
                      ? product.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Product Image ${i + 1}`}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                              margin: "0 5px",
                            }}
                          />
                        ))
                      : "No images"}
                  </td>
                  <td>{product.brand || "N/A"}</td>
                  <td>{product.isPremium ? "Yes" : "No"}</td>
                  <td>{product.colors ? product.colors.join(", ") : "N/A"}</td>
                  <td>
                    {product.designs ? product.designs.join(", ") : "N/A"}
                  </td>
                  <td>{product.sizes ? product.sizes.join(", ") : "N/A"}</td>
                  <td>
                    {product.materials ? product.materials.join(", ") : "N/A"}
                  </td>
                  <td>
                    {product.applicationAreas
                      ? product.applicationAreas.join(", ")
                      : "N/A"}
                  </td>
                  <td>
                    <Link href={`/admin/editProduct/${product._id}`}>
                      <Button variant="light" size="sm">
                        Edit
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="16" className="text-center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
