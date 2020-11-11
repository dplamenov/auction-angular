import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductCardComponent} from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
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
