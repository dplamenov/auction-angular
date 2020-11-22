import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../../core/interfaces/product';
import {UserService} from '../../user/user.service';
import {switchMap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

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
    this.route.params
      .pipe(switchMap(({productId: id}) => this.productService.getById(id)))
      .subscribe(product => {
        this.product = product;
      }, _ => {
        this.router.navigate(['/']);
      });
  }

  deleteHandler(product: Product) {
    this.productService.delete(product._id)
      .subscribe(product => {
        this.router.navigate(['/'], {queryParams: {notification: 'deleted'}});
      });
  }

  bid(formData) {
    console.log(formData.value);
  }
}
