import Axios from 'axios';
import { Product, Order } from '@/data/entities';

// const protocol = 'http';
// const hostname = 'localhost';
// const port = 4600;

const urls = {
  //   products: `${protocol}://${hostname}:${port}/products`,
  //   orders: `${protocol}://${hostname}:${port}/orders`,
  products: '/api/products',
  orders: '/api/orders',
};

export class HttpHandler {
  // loadProducts(): Promise<Product[]> {
  //     return Axios.get(urls.products).then(response => response.data);
  // },
  async loadProducts(): Promise<Product[]> {
    const response = await Axios.get(urls.products);
    return response.data;
  }

  // storeOrder(order: Order): Promise<number> {
  //     let orderData = {
  //         lines: [...order.orderLines.values()].map(ol => ({
  //             productId: ol.product.id,
  //             productName: ol.product.name,
  //             quantity: ol.quantity,
  //         }))
  //     }
  //     return Axios.post<{id: number}>(urls.orders, orderData).then(response => response.data.id);
  // }

  async storeOrder(order: Order): Promise<number> {
    let orderData = {
      lines: [...order.orderLines.values()].map((ol) => ({
        productId: ol.product.id,
        productName: ol.product.name,
        quantity: ol.quantity,
      })),
    };
    const response = await Axios.post<{ id: number }>(urls.orders, orderData);
    return response.data.id;
  }
}
