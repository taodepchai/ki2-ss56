import { useEffect, useState } from "react";
interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}
const Bt1 = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>bt1</h1>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.product_name}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.product_name}
                  width="100"
                />
              </td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{new Date(product.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bt1;
