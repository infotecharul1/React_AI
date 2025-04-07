import React, { useEffect, useState } from "react";

export default function Products() {
  var [products, setProducts] = useState([]); // state variable to store the data

  // fetch or axios

  function fetchData() {
    // function to fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        console.log(data);

        setProducts(data); // update the state variable;
      });
  }

  // Fetching data using useEffect to avoid infinite loop
  useEffect(() => {
    fetchData(); // Call the function to fetch data
  }, []); // Empty array to avoid infinite loop

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-content">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="product-price">${product.price.toFixed(2)}</span>
              <button className="product-btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
