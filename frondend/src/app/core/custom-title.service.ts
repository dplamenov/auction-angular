import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {environment} from '../../environments/environment';

@Injectable()
export class CustomTitleService {
  constructor(@Inject(DOCUMENT) private document) {
  }

  getTitle() {
    return this.document.title;
  }

  setTitle(newTitle: string) {
    this.document.title = `${environment.titlePrefix} | ${newTitle}`;
    return this.document.title;
  }
}
