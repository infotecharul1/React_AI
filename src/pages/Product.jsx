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

  fetchData(); // call the function to fetch data
  useEffect(() => {
    fetchData(); // call the function to fetch data
  }, []); // empty array to avoid infinite loop

  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <h2>{product.price}</h2>
          </div>
        );
      })}
    </div>
  );
}
