import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap, delay} from 'rxjs/operators';
import {Product} from '../../core/interfaces/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({productId}) => this.productService.getById(productId)))
      .subscribe(product => {
        this.product = product;
      });
  }

  editHandler(editForm) {
    const {form: {value: {title, description}}} = editForm;

    // this.productService.edit
  }
}
