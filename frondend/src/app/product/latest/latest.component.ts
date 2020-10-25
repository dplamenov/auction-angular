import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  imagePath = 'http://localhost:3000/images/';
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getLatestProducts().subscribe(products => {
      this.products = products.map(product => {
        product.image = `${this.imagePath}${product._id}.png`;
        return product;
      });
    });
  }

}
