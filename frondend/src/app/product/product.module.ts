import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LatestComponent} from './latest/latest.component';
import {CreateComponent} from './create/create.component';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DefaultInterceptor} from '../default.interceptor';
import {ProductService} from './product.service';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule} from '@angular/router';

import {MatDatepickerModule} from '@angular/material/datepicker'; //1
import {MatFormFieldModule} from '@angular/material/form-field'; //2
import {MatNativeDateModule} from '@angular/material/core'; // 3
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LatestComponent, CreateComponent, ProductCardComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule],
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
