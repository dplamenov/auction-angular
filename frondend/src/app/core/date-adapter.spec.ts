import { DateAdapter as CustomDateAdapter } from './date-adapter';
import {TestBed} from '@angular/core/testing';
import {DateAdapter, NativeDateAdapter} from '@angular/material/core';

describe('DateAdapter', () => {

  let service: CustomDateAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{provide: NativeDateAdapter, useClass: DateAdapter}]});
    service = TestBed.inject(CustomDateAdapter);
  });


  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
