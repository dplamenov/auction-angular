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
      comments: [],
      likes: [],
      _id: '5fc8d2289783d20ee063d791',
      title: 'Apple AirPods',
      description: 'Now with more talk time, voice-activated Siri access — and a wireless charging case — AirPods deliver an unparalleled wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic!',
      endTime: 'Thu Dec 24 2020 00:00:00 GMT+0200 (EET)',
      startPrice: '399',
      creator: {
        _id: '5fc8d1ab9783d20ee063d790',
        email: 'dimitar.plamenov@gmail.com'
      },
      createTime: '1606996520766',
      isOwner: false,
      bids: [],
      endString: '12',
      image: '1',
      priceValue: 1
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
