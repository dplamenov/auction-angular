import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';

@Injectable({providedIn: 'root'})
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
    return this.httpClient.get<Product>(`product/${productId}`);
  }

  delete(productId) {
    return this.httpClient.delete<Product>(`product/${productId}`);
  }

  getAll(skip = 0, take = 0) {
    return this.httpClient.get<Product[]>(`product?skip=${skip}&take=${take}`);
  }
}
