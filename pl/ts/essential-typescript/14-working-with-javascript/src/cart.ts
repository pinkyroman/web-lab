import { SportsProduct } from './product';

class CartItem {
  constructor(public product: SportsProduct, public quantity: number) {}

  get totalPrice(): number {
    return this.quantity * this.product.price;
  }
}

export class Cart {
  private items = new Map<number, CartItem>();

  constructor(public customerName: string) {}

  addProduct(product: SportsProduct, quantity: number): number {
    if (this.items.has(product.id)) {
      // has()로 체크 했으므로, get()에서 undefined를 반환하지 않음. 따라서, type assertion !를 사용해서 TS2352 에러를 방지.
      let item = this.items.get(product.id)!;
      item.quantity += quantity;
      return item.quantity;
    } else {
      this.items.set(product.id, new CartItem(product, quantity));
      return quantity;
    }
  }

  get totalPrice(): number {
    return [...this.items.values()].reduce(
      (total, item) => (total += item.totalPrice),
      0
    );
  }

  get itemCount(): number {
    return [...this.items.values()].reduce(
      (total, item) => (total += item.quantity),
      0
    );
  }
}
