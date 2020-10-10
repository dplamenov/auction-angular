import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

interface User {
  _id: string;
  email: string;
}

interface LoginUser extends User {
  authToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  storage = sessionStorage;

  private userData: User;

  private set user(value) {
    this.userData = value;
  }

  private get user(): User {
    return this.userData;
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  createUser(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/user/register', {email, password}, this.httpOptions);
  }

  login(email, password): Observable<LoginUser> {
    return this.http.post<LoginUser>('http://localhost:3000/api/user/login', {email, password}, this.httpOptions)
      .pipe(tap(user => {
        this.user = user;
        console.log(this);
      }));
  }

  isLogin(): boolean {
    return !!(this.user || {})._id;
  }

  logout(): Promise<boolean> {
    return new Promise(resolve => {
      this.storage.removeItem('authToken');
      resolve(true);
    });
  }
}
