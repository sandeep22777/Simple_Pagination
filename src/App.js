import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    console.log(data.products);

    if (data.products && data.products.length > 0) {
      setProducts(data.products);
    }

    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello Sandeep</h1>
      <div className="products">
        {products.slice(page * 10 - 10, page * 10).map((product, ind) => (
          <div>{product.title}</div>
        ))}
      </div>

      <div className="page">
        <span
          className={page > 1 ? "left" : "le"}
          onClick={() => setPage(page - 1)}
        >
          ⬅️
        </span>
        {[...Array(products.length / 10)].map((_, ind) => (
          <span key={ind} className="btn" onClick={() => setPage(ind + 1)}>
            {ind}
          </span>
        ))}
        <span
          className={page < products.length / 10 ? "left" : "le"}
          onClick={() => setPage(page + 1)}
        >
          ➡️
        </span>
      </div>
    </div>
  );
}
