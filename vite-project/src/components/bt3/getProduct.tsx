
export const getProductById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        return data;
      } else if (response.status === 404) {
        console.log("Không tìm thấy bản ghi");
        return null;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error('There was an error fetching the product!', error);
    }
  };
  