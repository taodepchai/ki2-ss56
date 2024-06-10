import React, { useEffect } from "react";
import { deleteProductById } from "./deleteProduct";

const Bt4: React.FC = () => {
  useEffect(() => {
    const deleteProduct = async () => {
      const productId = 1;
      const result = await deleteProductById(productId);
      if (result) {
        console.log("Product deleted successfully");
      } else {
        console.log("Failed to delete the product");
      }
    };

    deleteProduct();
  }, []);

  return (
    <div>
      <h1>Bt4</h1>
    </div>
  );
};

export default Bt4;
