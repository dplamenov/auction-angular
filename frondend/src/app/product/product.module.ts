import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {LatestComponent} from './latest/latest.component';
import {CreateComponent} from './create/create.component';
import {AllComponent} from './all/all.component';
import {ProductService} from './product.service';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {DefaultInterceptor} from '../default.interceptor';
import {ProductRoutingModule} from './product-routing.module';

import {ImageCropperModule} from 'ngx-image-cropper';
import {DateAdapter as CustomDateAdapter} from '../core/date-adapter';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [LatestComponent, CreateComponent, ProductCardComponent, ProductDetailsComponent, AllComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule,
    ProductRoutingModule,
    MatPaginatorModule,
    SharedModule,
    ImageCropperModule],
  exports: [LatestComponent, CreateComponent],
  providers: [
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    },
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MAT_DATE_LOCALE, useValue: 'bg-BG'}
  ]
})
export class ProductModule {
}
