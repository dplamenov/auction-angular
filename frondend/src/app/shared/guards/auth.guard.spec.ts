import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {UserService} from '../../user/user.service';
import {HttpClientModule} from '@angular/common/http';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
