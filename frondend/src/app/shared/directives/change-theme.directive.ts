import {Directive, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appChangeTheme]'
})
export class ChangeThemeDirective {

  constructor(@Inject(DOCUMENT) private document) {
    this.document.documentElement.classList.toggle('light-mode');
  }

  @HostListener('change', ['$event'])
  change(data){
    this.document.documentElement.classList.toggle('dark-mode');
    this.document.documentElement.classList.toggle('light-mode');
  }

}
