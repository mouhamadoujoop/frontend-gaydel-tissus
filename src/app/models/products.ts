export class Product {
  id: number;
  name: string;
  quality: string;
  conversion_rate: number;

  constructor(product: any) {
    this.id = product.id;
    this.name = product.name;
    this.quality = product.quality;
    this.conversion_rate = product.conversion_rate;
  }

}
