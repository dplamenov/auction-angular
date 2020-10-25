import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LatestComponent} from './latest/latest.component';
import {CreateComponent} from './create/create.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [LatestComponent, CreateComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [LatestComponent, CreateComponent]
})
export class ProductModule {
}
