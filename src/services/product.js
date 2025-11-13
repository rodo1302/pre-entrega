const BASE_URL = "https://691222b052a60f10c820beb5.mockapi.io/products";

export const createProduct = async (product) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error("Error al crear el producto");
  }
  return await response.json();
};
