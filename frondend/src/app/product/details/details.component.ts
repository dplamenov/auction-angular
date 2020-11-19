import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {environment} from '../../../environments/environment';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId: number;
  product: Product;

  get isLoggedIn() {
    return this.userService.isLogged;
  }

  constructor(private route: ActivatedRoute, private productService: ProductService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params.productId;
      this.productService.getById(this.productId).subscribe(product => {
        const endDate = new Date(product.endTime);
        product.image = `${environment.imagePath}${product._id}.png`;
        product.endString = `${endDate.getDate().toString().padStart(2, '0')}.${endDate.getMonth().toString().padStart(2, '0')}.${endDate.getFullYear()}`;
        this.product = product;
      });
    });
  }

  deleteHandler(product: Product) {
    this.productService.delete(product._id)
      .subscribe(product => {
        this.router.navigate(['/'], {queryParams: {notification: 'deleted'}});
      });
  }
}
