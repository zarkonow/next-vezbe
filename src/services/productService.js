export default async function getAllProducts(limit = 9) {
  const response = await fetch(
    process.env.PRODUCT_API_URL + "/products?limit=" + limit
  );
  return await response.json();
}

export async function getProductById(productId) {
  const response = await fetch(
    process.env.PRODUCT_API_URL + "/products/" + productId
  );

  if (response.status === 404) {
    return false;
  }

  return await response.json();
}
