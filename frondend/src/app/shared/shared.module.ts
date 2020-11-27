import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MinDirective} from './directives/min.directive';
import {ShortenPipe} from './pipes/shorten.pipe';
import { ChangeThemeDirective } from './directives/change-theme.directive';

@NgModule({
  declarations: [LoaderComponent, MinDirective, ShortenPipe, ChangeThemeDirective],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [LoaderComponent, MinDirective, ShortenPipe, ChangeThemeDirective]
})
// @ts-ignore
export class SharedModule {
}
