import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import { Product } from './types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const addProduct = async (product: Product) => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        fetchProducts();
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async (updatedProduct: Product) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${updatedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      if (response.ok) {
        fetchProducts();
        setSelectedProduct(null);
        setIsEditing(false);
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts();
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
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
