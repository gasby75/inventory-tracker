import { Product } from "./Product";
import { DiscountableProduct } from "./DiscountableProduct";

export class PhysicalProduct
  extends Product
  implements DiscountableProduct {

  constructor(
    sku: string,
    name: string,
    price: number,
    public weight: number
  ) {
    super(sku, name, price);
  }

  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  override getPriceWithTax(): number {
    const taxRate = 0.10;
    return this.price + this.price * taxRate;
  }

  applyDiscount(discountPercentage: number): number {
    const discount = this.price * (discountPercentage / 100);
    return this.price - discount;
  }

  applyBulkDiscount(quantity: number): number {
    const bulkDiscountRate = 0.15;

    if (quantity >= 10) {
      return this.price - this.price * bulkDiscountRate;
    }

    return this.price;
  }
}