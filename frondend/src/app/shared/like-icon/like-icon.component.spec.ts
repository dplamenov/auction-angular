import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeIconComponent } from './like-icon.component';

describe('LikeIconComponent', () => {
  let component: LikeIconComponent;
  let fixture: ComponentFixture<LikeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
