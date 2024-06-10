export const deleteProductById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log(`Product with ID ${id} deleted successfully`);
      return true;
    } else if (response.status === 404) {
      console.log("Không tìm thấy bản ghi");
      return false;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error('There was an error deleting the product!', error);
    return false;
  }
};
