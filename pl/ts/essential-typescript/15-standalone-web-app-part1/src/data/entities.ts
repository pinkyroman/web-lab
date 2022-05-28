export type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
};

export class OrderLine {
  constructor(public product: Product, public quantity: number) {}

  get total(): number {
    return this.product.price * this.quantity;
  }
}

export class Order {
  private lines = new Map<number, OrderLine>();

  constructor(initialLines?: OrderLine[]) {
    if (initialLines) {
      initialLines.forEach((orderLine) =>
        this.lines.set(orderLine.product.id, orderLine)
      );
    }
  }

  public addProduct(prod: Product, quantity: number): void {
    if (this.lines.has(prod.id)) {
      if (quantity === 0) {
        this.removeProduct(prod.id);
      } else {
        this.lines.get(prod.id)!.quantity += quantity;
      }
    } else {
      this.lines.set(prod.id, new OrderLine(prod, quantity));
    }
  }

  public removeProduct(id: number): void {
    this.lines.delete(id);
  }

  get orderLines(): OrderLine[] {
    return [...this.lines.values()];
  }

  get productCount(): number {
    return [...this.lines.values()].reduce(
      (total, orderLine) => (total += orderLine.quantity),
      0
    );
  }

  get total(): number {
    return [...this.lines.values()].reduce(
      (total, orderLine) => (total += orderLine.total),
      0
    );
  }
}
