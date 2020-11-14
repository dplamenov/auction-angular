import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

import {LatestComponent} from './latest/latest.component';
import {CreateComponent} from './create/create.component';
import {AllComponent} from './all/all.component';
import {ProductService} from './product.service';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {DefaultInterceptor} from '../default.interceptor';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  declarations: [LatestComponent, CreateComponent, ProductCardComponent, ProductDetailsComponent, AllComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule,
    ProductRoutingModule,
    MatPaginatorModule],
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
