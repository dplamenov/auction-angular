import {NativeDateAdapter} from '@angular/material/core';
import {Injectable} from '@angular/core';

@Injectable()
export class DateAdapter extends NativeDateAdapter {
  getFirstDayOfWeek(): number {
    return 1;
  }
}
