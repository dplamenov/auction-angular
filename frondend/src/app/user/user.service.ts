import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiPath = 'http://localhost:3000/api/';
  user: User;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  authCompleted$ = this.http.get('auth').pipe(shareReplay(1));

  constructor(private http: HttpClient) {
    this.authCompleted$.subscribe((user: User) => {
      this.user = user;
    }, () => {
      this.user = null;
    });
  }

  get isLogged() { return !!this.user; }

  register(email: string, password: string) {
    return this.http.post(`${this.apiPath}/user/register`, {email, password}, this.httpOptions);
  }

  login(email: string, password: string){
    return this.http.post<User>(`${this.apiPath}/user/login`, {email, password}, this.httpOptions)
      .pipe(tap((user) => {
        this.user = user;
      }));
  }

  logout() {
    return this.http.get(`${this.apiPath}/user/logout`).pipe(tap(() => {
      this.user = null;
    }));
  }
}
