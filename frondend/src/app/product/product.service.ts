import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  getLatestProducts() {
    return this.httpClient.get<Product[]>(`product/latest`);
  }
}
