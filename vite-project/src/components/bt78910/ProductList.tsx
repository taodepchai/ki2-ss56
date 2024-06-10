import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import { Product } from './types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
    setSelectedProduct(null);
    setIsEditing(false);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const editProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  return (
    <div>
      <button onClick={() => setIsEditing(true)}>Thêm mới sản phẩm</button>
      {isEditing && (
        <ProductForm
          addProduct={addProduct}
          updateProduct={updateProduct}
          product={selectedProduct}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Ngày thêm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              index={index}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
