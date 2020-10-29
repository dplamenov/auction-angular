import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LatestComponent} from './latest/latest.component';
import {CreateComponent} from './create/create.component';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DefaultInterceptor} from '../default.interceptor';
import {ProductService} from './product.service';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [LatestComponent, CreateComponent, ProductCardComponent, ProductDetailsComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [LatestComponent, CreateComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    },
    ProductService
  ]
})
export class ProductModule {
}
