import React, { useState, useEffect } from "react";

import axios from "axios";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadUser = () => {
    axios.get(`https://dummyjson.com/products?offset=${offset}`).then((res) => {
      console.log(res.data.products);
      const data = res.data.products;
      setData((data) => [...data, ...res.data.products]);
    }, []);
  };

  useEffect(() => {
    loadUser();
  }, [offset]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + 5);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div>
      <h2>Infinite Scroll View</h2>
      <div className="card">
        {data &&
          data.map((product) => (
            <div className="product-item" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img"
              />
              <div className="product-info">
                <h4>{product.title}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;
