import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface User {
  email: string;
  password: string;
}

interface LoginUser extends User{
  authToken: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  createUser(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/user/register', {email, password}, this.httpOptions);
  }

  login(email, password): Observable<LoginUser> {
    return this.http.post<LoginUser>('http://localhost:3000/api/user/login', {email, password}, this.httpOptions);
  }
}
