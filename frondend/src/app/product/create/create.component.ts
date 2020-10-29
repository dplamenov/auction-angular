import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  title = new FormControl();
  description = new FormControl();
  startPrice = new FormControl();
  endDate = new FormControl();
  file = new FormControl();

  selectedFile: File;
  fd = new FormData();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  create() {
    console.log(this.fileUpload.nativeElement);
    this.selectedFile = (this.file.value as File);

    this.fd.append('image', this.selectedFile);

    this.fd.append('title', this.title.value);
    this.fd.append('description', this.description.value);
    this.fd.append('startPrice', this.startPrice.value);
    this.fd.append('endTime', this.endDate.value);

    this.productService.create(this.fd).subscribe(data => {
      console.log(data);
    });

  }
}
