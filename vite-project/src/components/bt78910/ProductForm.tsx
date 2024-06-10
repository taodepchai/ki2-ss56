import React, { useEffect, useState } from 'react';
import { Product } from './types';

interface ProductFormProps {
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  product: Product | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ addProduct, updateProduct, product }) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    image: '',
    price: 0,
    quantity: 0,
    dateAdded: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
        dateAdded: product.dateAdded
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'quantity' ? +value : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      updateProduct({ ...formData, id: product.id });
    } else {
      addProduct({ ...formData, id: Date.now() });
    }
    setFormData({
      name: '',
      image: '',
      price: 0,
      quantity: 0,
      dateAdded: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tên sản phẩm" required />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Hình ảnh URL" required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Giá" required />
      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Số lượng (kg)" required />
      <input type="date" name="dateAdded" value={formData.dateAdded} onChange={handleChange} required />
      <button type="submit">{product ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</button>
    </form>
  );
};

export default ProductForm;
