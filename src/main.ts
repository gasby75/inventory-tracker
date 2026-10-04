import { Product } from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import { sortByPrice, sortByName } from "./utils/productSorter";

const laptop = new PhysicalProduct(
  "P001",
  "Laptop",
  1000,
  2.5
);

const ebook = new DigitalProduct(
  "D001",
  "TypeScript E-Book",
  30,
  50
);

const products: Product[] = [laptop, ebook];

for (const product of products) {
  console.log(product.displayDetails());
  console.log(`Final Price: $${calculateTax(product).toFixed(2)}`);

 if (product instanceof PhysicalProduct) {
  console.log(`Weight: ${product.formattedWeight}`);

  console.log(
    `Price after 10% discount: $${product.applyDiscount(10).toFixed(2)}`
  );

  console.log(
    `Bulk price for 10+ items: $${product.applyBulkDiscount(10).toFixed(2)}`
  );
}

  if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.formattedFileSize}`);
  }

  console.log("-------------------------");
}

console.log("\nProducts sorted by price:");

const productsByPrice = sortByPrice(products);

for (const product of productsByPrice) {
  console.log(`${product.name}: $${product.price.toFixed(2)}`);
}

console.log("\nProducts sorted by name:");

const productsByName = sortByName(products);

for (const product of productsByName) {
  console.log(`${product.name}: $${product.price.toFixed(2)}`);
}