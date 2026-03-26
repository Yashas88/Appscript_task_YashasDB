const API_URL = "https://fakestoreapi.com/products";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x400?text=No+Image";

function normalizeProduct(item) {
  return {
    id: item?.id ?? 0,
    title: item?.title ?? "Untitled Product",
    price: item?.price ?? 0,
    description: item?.description ?? "",
    category: item?.category ?? "uncategorized",
    image: item?.image || PLACEHOLDER_IMAGE,
    rating: {
      rate: item?.rating?.rate ?? 0,
      count: item?.rating?.count ?? 0,
    },
  };
}

export async function fetchProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return Array.isArray(data) ? data.map(normalizeProduct) : [];
}

export function getCategories(products) {
  return [...new Set(products.map((p) => p.category))].sort();
}
