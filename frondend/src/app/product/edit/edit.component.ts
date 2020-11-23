import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  editHandler(editForm) {
    const {form: {value: {title, description}}} = editForm;

    // this.productService.edit
  }
}
