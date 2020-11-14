import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  static addImagePath(product) {
    const {imagePath} = environment;
    product.image = `${imagePath}${product._id}.png`;
    return product;
  }

  getLatestProducts() {
    return this.httpClient.get<Product[]>(`product/latest`).pipe(map((products) => {
      return products.map(ProductService.addImagePath);
    }));
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
    return this.httpClient.get<Product[]>(`product?skip=${skip}&take=${take}`).pipe(map((products) => {
      return products.map(ProductService.addImagePath);
    }));
  }
}
