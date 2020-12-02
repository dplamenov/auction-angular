import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../shared/interfaces/product';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Bid} from '../shared/interfaces/bid';
import {Observable} from 'rxjs';
import {Comment} from '../shared/interfaces/comment';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  static addImagePath(product: Product): Product {
    const {imagePath} = environment;
    product.image = `${imagePath}${product._id}.png`;
    return product;
  }

  getLatestProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`product/latest`).pipe(map((products) => {
      return products.map(ProductService.addImagePath);
    }));
  }

  create(product: FormData): Observable<Product> {
    return this.httpClient.post<Product>('product', product);
  }

  getById(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`product/${productId}`)
      .pipe(map((product) => {
        const endDate = new Date(product.endTime);
        product.image = `${environment.imagePath}${product._id}.png`;
        product.endString = `${endDate.getDate().toString().padStart(2, '0')}.${endDate.getMonth().toString().padStart(2, '0')}.${endDate.getFullYear()}`;
        return product;
      }));
  }

  delete(productId: string): Observable<Product> {
    return this.httpClient.delete<Product>(`product/${productId}`);
  }

  getAll(skip = 0, take = 0, sort = 0): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`product?skip=${skip}&take=${take}&sort=${sort}`).pipe(map((products) => {
      return products.map(ProductService.addImagePath);
    }));
  }

  getProductCount(): Observable<{ count: number }> {
    return this.httpClient.get<{ count: number }>(`product/count`);
  }

  addBid(productId: string, priceValue): Observable<Bid> {
    return this.httpClient.post<Bid>(`product/${productId}/bid`, {priceValue});
  }

  edit(productId: string, data): Observable<Product> {
    return this.httpClient.patch<Product>(`product/${productId}`, data);
  }

  comment(productId: string, comment: string): Observable<Comment> {
    return this.httpClient.post<Comment>(`product/${productId}/comment`, {comment});
  }

  like(productId: string) {
    return this.httpClient.post<any>(`product/${productId}/like`, {a: 1});
  }
}
