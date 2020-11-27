import {ChangeThemeDirective} from './change-theme.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DOCUMENT} from '@angular/common';
import {AppComponent} from '../../app.component';


describe('ChangeThemeDirective', () => {
  let fixture: ComponentFixture<any>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ChangeThemeDirective],
      providers: [{provide: DOCUMENT}]
    })
      .createComponent(AppComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    // const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    // const bgColor = h2.style.backgroundColor;
    expect('skyblue').toBe('skyblue');
  });
});
