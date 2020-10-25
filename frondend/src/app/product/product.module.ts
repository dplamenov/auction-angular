import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LatestComponent} from './latest/latest.component';
import {CreateComponent} from './create/create.component';

@NgModule({
  declarations: [LatestComponent, CreateComponent],
  imports: [CommonModule],
  exports: [LatestComponent, CreateComponent]
})
export class ProductModule {
}
