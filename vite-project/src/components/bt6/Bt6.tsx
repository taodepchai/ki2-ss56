import React, { useState } from 'react';
import { updateProductById } from './updateProduct'

const Bt6: React.FC = () => {
  const [product, setProduct] = useState({
    product_name: '',
    image: '',
    price: 0,
    quantity: 0,
  });
  const [productId, setProductId] = useState<number>(1); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: name === 'price' || name === 'quantity' ? parseFloat(value) : value,
    }));
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(parseInt(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = await updateProductById(productId, product);
    if (updatedProduct) {
      console.log('Product updated successfully:', updatedProduct);
    }
  };

  return (
    <div>
      <h1>Bt6</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product ID:</label>
          <input type="number" value={productId} onChange={handleIdChange} />
        </div>
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
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default Bt6;
