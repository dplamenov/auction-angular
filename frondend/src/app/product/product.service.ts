import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../core/interfaces/product';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Bid} from '../core/interfaces/bid';
import {Observable} from 'rxjs';

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
    return this.httpClient.get<Product>(`product/${productId}`)
      .pipe(map((product) => {
        const endDate = new Date(product.endTime);
        product.image = `${environment.imagePath}${product._id}.png`;
        product.endString = `${endDate.getDate().toString().padStart(2, '0')}.${endDate.getMonth().toString().padStart(2, '0')}.${endDate.getFullYear()}`;
        return product;
      }));
  }

  delete(productId) {
    return this.httpClient.delete<Product>(`product/${productId}`);
  }

  getAll(skip = 0, take = 0) {
    return this.httpClient.get<Product[]>(`product?skip=${skip}&take=${take}`).pipe(map((products) => {
      return products.map(ProductService.addImagePath);
    }));
  }

  getProductCount() {
    return this.httpClient.get<{ count: number }>(`product/count`);
  }

  addBid(productId, priceValue): Observable<Bid> {
    return this.httpClient.post<Bid>(`product/${productId}/bid`, {priceValue});
  }

}
