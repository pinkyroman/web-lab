import { AbstractDataSource } from './abstractDataSource';
import { Product /* Order */ } from './entities';
import Axios from 'axios';

// const protocol = 'http';
// const hostname = 'localhost';
// const port = 4600;

const urls = {
  //   products: `${protocol}://${hostname}:${port}/products`,
  //   orders: `${protocol}://${hostname}:${port}/orders`,
  products: '/api/products',
  orders: '/api/orders',
};

export class RemoteDataSource extends AbstractDataSource {
  protected loadProducts(): Promise<Product[]> {
    return Axios.get(urls.products).then((response) => response.data);
  }

  storeOrder(): Promise<number> {
    let orderData = {
      lines: [...this.order.orderLines.values()].map((orderLine) => ({
        productId: orderLine.product.id,
        productName: orderLine.product.name,
        quantity: orderLine.quantity,
      })),
    };
    return Axios.post(urls.orders, orderData).then(
      (response) => response.data.id
    );
  }
}
