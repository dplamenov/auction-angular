import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ImageCroppedEvent} from 'ngx-image-cropper';

function dataURItoBlob(dataURI) {
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
export class CreateComponent implements OnInit {

  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;

  title = new FormControl('', [Validators.minLength(3)]);
  description = new FormControl('', [Validators.minLength(10)]);
  startPrice = new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]);
  endDate = new FormControl('', [Validators.required]);
  file = new FormControl('', Validators.required);
  selectedFile: File;

  fd = new FormData();

  errorMessage = '';
  showServerErrorMessage = false;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    // this.selectedFile = (this.fileUpload.nativeElement.files[0] as File);
    //
    // const imageDataUrl = this.croppedImage.replace(/^data:image\/(png|jpg);base64,/, "");
    // const imageBlob = dataURItoBlob(imageDataUrl);
    // this.selectedFile  = new File([imageBlob], 'image.png', { type: 'image/png' })

    if (!this.selectedFile) {
      this.file.errors.myError = 'test';
      return;
    }

    this.fd.append('image', this.selectedFile);

    this.fd.append('title', this.title.value);
    this.fd.append('description', this.description.value);
    this.fd.append('startPrice', this.startPrice.value);
    this.fd.append('endTime', this.endDate.value);

    this.productService.create(this.fd).subscribe(data => {
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

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }
}
