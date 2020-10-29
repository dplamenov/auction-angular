import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  title = new FormControl('', [Validators.minLength(3)]);
  description = new FormControl('', [Validators.minLength(10)]);
  startPrice = new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]);
  endDate = new FormControl('', [Validators.required]);
  file = new FormControl('', Validators.required);

  selectedFile: File;
  fd = new FormData();

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.selectedFile = (this.fileUpload.nativeElement.files[0] as File);
    console.log(this.selectedFile);

    this.fd.append('image', this.selectedFile);

    this.fd.append('title', this.title.value);
    this.fd.append('description', this.description.value);
    this.fd.append('startPrice', this.startPrice.value);
    this.fd.append('endTime', this.endDate.value);

    this.productService.create(this.fd).subscribe(data => {
      this.router.navigate(['']).then();
    });

  }
}
