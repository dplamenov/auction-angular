import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../../shared/interfaces/product';
import {UserService} from '../../user/user.service';
import {switchMap, tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId: number;
  product: Product;

  bidsDisplayCount = 5;
  isShowMoreBtnActive: boolean;

  get isLoggedIn() {
    return this.userService.isLogged;
  }

  constructor(private route: ActivatedRoute, private productService: ProductService, private userService: UserService, private router: Router, private title: Title) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({productId: id}) => this.productService.getById(id)))
      .subscribe(product => {
        this.product = product;
        this.isShowMoreBtnActive = product.bids.length > 5;
        this.title.setTitle(`Product ${this.product.title}`);
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

  bidHandler(form) {
    const {value: {bid}} = form;
    this.productService.addBid(this.product._id, Number(bid))
      .pipe(switchMap(() => {
        return this.productService.getById(this.product._id);
      }), tap(() => {
        form.reset();
      }))
      .subscribe(product => {
        this.product = product;
      });
  }

  showMoreBids() {
    this.bidsDisplayCount += 5;
    this.isShowMoreBtnActive = this.product.bids.length > this.bidsDisplayCount;
  }

  commentHandler(form) {
    const {value: {comment}} = form;
    console.log(comment);
  }
}
