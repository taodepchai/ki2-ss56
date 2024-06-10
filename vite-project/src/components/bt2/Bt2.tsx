import { useEffect } from "react";

const Bt2 = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Bt2</h1>
    </div>
  );
};

export default Bt2;
