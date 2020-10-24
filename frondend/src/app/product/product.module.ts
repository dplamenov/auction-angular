import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestComponent } from './latest/latest.component';

@NgModule({
  declarations: [LatestComponent],
  imports: [
    CommonModule
  ],
  exports: [LatestComponent]
})
export class ProductModule { }
