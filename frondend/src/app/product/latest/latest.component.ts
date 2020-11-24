import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/interfaces/product';
import {ProductService} from '../product.service';
import {environment} from '../../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  products: Product[];
  isProductsEmpty = true;
  private imagePath: string;

  constructor(private productService: ProductService, private title: Title) {
    title.setTitle('Latest products');
  }

  ngOnInit(): void {
    this.imagePath = environment.imagePath;

    this.productService.getLatestProducts().subscribe(products => {
      this.products = products;
      this.isProductsEmpty = products.length === 0;
    });
  }

}
