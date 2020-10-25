import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private apiPath = 'http://localhost:3000/api/';
  private user: User;

  constructor() { }
}
