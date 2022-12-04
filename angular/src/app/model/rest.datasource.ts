import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from "./user.model";


const PROTOCOL = 'http';
const PORT = '3000'; // Express Port



@Injectable()
export class RestDataSource {
  user: User | null;
  baseUrl: string;
  authToken: string = "";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.user = new User();
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any> {
    this.authToken = "";
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token');
    this.authToken = token!;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}