import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NotFoundComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NotFoundComponent, FooterComponent]
})
export class CoreModule {
}
