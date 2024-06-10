interface Product {
    product_name: string;
    image: string;
    price: number;
    quantity: number;
  }
  
  export const updateProductById = async (id: number, product: Product) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(`Product updated successfully:`, data);
        return data;
      } else if (response.status === 404) {
        console.log("Không tìm thấy bản ghi");
        return null;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error('There was an error updating the product!', error);
    }
  };
  