import {Component, OnInit} from '@angular/core';
import {Product} from '../../core/interfaces/product';
import {ProductService} from '../product.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  products: Product[];
  isProductsEmpty = true;
  private imagePath: string;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.imagePath = environment.imagePath;

    this.productService.getLatestProducts().subscribe(products => {
      this.products = products;
      this.isProductsEmpty = products.length === 0;
    });
  }

}
