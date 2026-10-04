import { Product } from "./Product";

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    public fileSize: number
  ) {
    super(sku, name, price);
  }

  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  override getPriceWithTax(): number {
    return this.price;
  }
}