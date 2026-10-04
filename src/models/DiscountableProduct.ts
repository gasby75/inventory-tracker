export interface DiscountableProduct {
  applyDiscount(discountPercentage: number): number;
}