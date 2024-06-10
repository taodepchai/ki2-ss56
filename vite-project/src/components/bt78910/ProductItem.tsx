import React from 'react';
import { Product } from './types';

interface ProductItemProps {
  product: Product;
  index: number;
  deleteProduct: (id: number) => void;
  editProduct: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, index, deleteProduct, editProduct }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td><img src={product.image} alt={product.name} width="50" /></td>
      <td>{product.price} đ</td>
      <td>{product.quantity}</td>
      <td>{new Date(product.dateAdded).toLocaleDateString()}</td>
      <td>
        <button onClick={() => editProduct(product)}>Sửa</button>
        <button onClick={() => deleteProduct(product.id)}>Xóa</button>
      </td>
    </tr>
  );
};

export default ProductItem;
