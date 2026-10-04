import { Product } from "../models/Product";

export function sortByPrice(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.price - b.price);
}

export function sortByName(products: Product[]): Product[] {
  return [...products].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}