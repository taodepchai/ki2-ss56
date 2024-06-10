interface Product {
  product_name: string;
  image: string;
  price: number;
  quantity: number;
}

export const addProduct = async (product: Product) => {
  try {
    const response = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(`Product added successfully:`, data);
      return data;
    } else {
      throw new Error("Something went wrong while adding the product");
    }
  } catch (error) {
    console.error("There was an error adding the product!", error);
  }
};
