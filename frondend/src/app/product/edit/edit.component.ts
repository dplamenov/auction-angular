import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';
import {Product} from '../../shared/interfaces/product';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private title: Title) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({productId}) => this.productService.getById(productId)), tap((product) => {
        this.title.setTitle(`Edit product ${product.title}`);
      }))
      .subscribe(product => {
        this.product = product;
      });
  }

  editHandler(editForm) {
    const {form: {value: {title, description}}} = editForm;

    this.productService.edit(this.product._id, {title, description})
      .subscribe(product => {
        this.product = product;
        this.router.navigate(['/'], {queryParams: {notification: 'edited'}});
      });
  }
}
