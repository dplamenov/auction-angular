import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MinDirective} from './min.directive';
import {ShortenPipe} from './shorten.pipe';


@NgModule({
  declarations: [NotFoundComponent, FooterComponent, HeaderComponent, MinDirective, ShortenPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NotFoundComponent, FooterComponent, HeaderComponent, MinDirective, ShortenPipe]
})
export class CoreModule {
}
