import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserModule} from './user/user.module';
import {ProductModule} from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
