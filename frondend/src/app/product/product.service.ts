import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiPath = 'http://localhost:3000/api/product/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  constructor(private httpClient: HttpClient) {
  }

  getLatestProducts() {
    return this.httpClient.get<Product[]>(`${this.apiPath}latest`, this.httpOptions );
  }
}
