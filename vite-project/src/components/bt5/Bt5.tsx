import React, { useState } from 'react';
import { addProduct } from './addProduct';

const Bt5: React.FC = () => {
  const [product, setProduct] = useState({
    product_name: '',
    image: '',
    price: 0,
    quantity: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: name === 'price' || name === 'quantity' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const addedProduct = await addProduct(product);
    if (addedProduct) {
      console.log("Product added successfully:", addedProduct);
    }
  };

  return (
    <div>
      <h1>Bt5</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="product_name" value={product.product_name} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={product.image} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Bt5;
