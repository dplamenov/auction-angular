import {Injectable} from '@angular/core';
import {User} from '../shared/interfaces/user';
import {HttpClient} from '@angular/common/http';
import {tap, shareReplay} from 'rxjs/operators';
import {ProfileData} from '../shared/interfaces/profile-data';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  user: User;

  authCompleted$ = this.http.get<User>(`user/auth`).pipe(shareReplay(1));

  constructor(private http: HttpClient) {
    this.authCompleted$.subscribe((user: User) => {
      this.user = user;
    }, () => {
      this.user = null;
    });
  }

  get isLogged() {
    return !!this.user;
  }

  register(email: string, password: string) {
    return this.http.post(`user/register`, {email, password});
  }

  login(email: string, password: string) {
    return this.http.post<User>(`user/login`, {email, password})
      .pipe(tap((user) => {
        this.user = user;
      }));
  }

  logout() {
    return this.http.get(`user/logout`).pipe(tap(() => {
      this.user = null;
    }));
  }

  profile(userId: string | null): Observable<ProfileData>{
    return this.http.get<ProfileData>(`user/profile/${userId ? userId : ''}`);
  }
}
