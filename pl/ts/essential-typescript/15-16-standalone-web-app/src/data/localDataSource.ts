import { AbstractDataSource } from './abstractDataSource';
import { Product } from './entities';

export class LocalDataSource extends AbstractDataSource {
  protected loadProducts(): Promise<Product[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'P1',
        description: 'P1 (Watersports)',
        category: 'Watersports',
        price: 3,
      },
      {
        id: 2,
        name: 'P2',
        description: 'P1 (Watersports)',
        category: 'Watersports',
        price: 4,
      },
      {
        id: 3,
        name: 'P3',
        description: 'P3 (Running)',
        category: 'Running',
        price: 5,
      },
      {
        id: 4,
        name: 'P4',
        description: 'P4 (Chess)',
        category: 'Chess',
        price: 6,
      },
      {
        id: 5,
        name: 'P5',
        description: 'P5 (Chess)',
        category: 'Chess',
        price: 7,
      },
    ]);
  }

  storeOrder(): Promise<number> {
    console.log('Storing order...');
    console.log(JSON.stringify(this.order, null, 2));
    return Promise.resolve(1);
  }
}
