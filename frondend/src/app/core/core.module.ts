import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [NotFoundComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    SharedModule
  ],
  exports: [NotFoundComponent, FooterComponent, HeaderComponent]
})
export class CoreModule {
}
