import React, { useEffect } from 'react';
import { getProductById } from './getProduct';

const Bt3: React.FC = () => {
  useEffect(() => {
    const fetchProduct = async () => {
      const productId = 1; // Thay bằng ID sản phẩm muốn tìm
      const product = await getProductById(productId);
      if (!product) {
        console.log("Không tìm thấy bản ghi");
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Bt3</h1>
    </div>
  );
};

export default Bt3;
