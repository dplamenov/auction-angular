import {Component} from '@angular/core';
import {ProductService} from '../product.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {Title} from '@angular/platform-browser';

function dataURItoBlob(dataURI) {
  dataURI = dataURI.replace(/^data:image\/(png|jpg);base64,/, "");
  const byteString = atob(dataURI);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }
  return new Blob([int8Array], {type: 'image/png'});
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  title = new FormControl('', [Validators.minLength(5)]);
  description = new FormControl('', [Validators.minLength(50)]);
  startPrice = new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]);
  endDate = new FormControl('', [Validators.required]);
  file = new FormControl('', Validators.required);

  formData = new FormData();

  errorMessage = '';
  showServerErrorMessage = false;

  imageChangedEvent = '';
  croppedImage: any = '';

  constructor(private productService: ProductService, private router: Router, private titleService: Title) {
    titleService.setTitle('Create product');
  }

  create() {
    const imageBlob = dataURItoBlob(this.croppedImage);
    const image  = new File([imageBlob], 'image.png', { type: 'image/png' })

    this.formData.append('image', image);

    this.formData.append('title', this.title.value);
    this.formData.append('description', this.description.value);
    this.formData.append('startPrice', this.startPrice.value);
    this.formData.append('endTime', this.endDate.value);

    this.productService.create(this.formData).subscribe(data => {
      this.router.navigate(['']).then();
    }, (err) => {
      this.errorMessage = (Object.values(err.error)[0][0] as string);
      this.showServerErrorMessage = true;

      setTimeout(() => {
        this.showServerErrorMessage = false;
      }, 3000);
    });
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
}
