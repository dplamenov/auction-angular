import { TestBed } from '@angular/core/testing';

import { CustomTitleService } from './custom-title.service';

describe('CustomTitleService', () => {
  let service: CustomTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
