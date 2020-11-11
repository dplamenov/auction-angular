import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestComponent } from './latest.component';
import {HttpClientModule} from '@angular/common/http';

describe('LatestComponent', () => {
  let component: LatestComponent;
  let fixture: ComponentFixture<LatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
