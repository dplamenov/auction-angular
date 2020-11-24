import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserModule} from './user/user.module';
import {ProductModule} from './product/product.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomTitleService} from './core/custom-title.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: Title, useClass: CustomTitleService}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
