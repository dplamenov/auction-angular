import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params.productId;
      this.productService.getById(this.productId).subscribe(product => {
        this.product = product;
      });
    });
  }

}
