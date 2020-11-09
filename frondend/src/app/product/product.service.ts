import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  getLatestProducts() {
    return this.httpClient.get<Product[]>(`product/latest`);
  }

  create(product) {
    return this.httpClient.post<Product>('product', product);
  }

  getById(productId) {
    return this.httpClient.get<Product>(`product/${productId}`)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }));
  }
}
