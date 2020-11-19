import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';

describe('ProductCardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.product = {
      _id: '5fa92651df489d0ddf552342',
      title: 'product title1 4 1525 15 152',
      description: 'test',
      endTime: '1603014589212',
      startPrice: '4104.155',
      creator: '5f8309254cd133105880f9a2',
      createTime: '1604920913222',
      isOwner: false,
      endString: '21.12.2020',
      image: 'kw.jpg'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
