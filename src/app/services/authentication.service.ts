import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';


import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')||'{}' ));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {


       // let headers = new HttpHeaders();
       // headers = headers.set('Content-Type', 'application/json; charset=utf-8');


        return this.http.post<any>(`${env.url}/auth`, { username, password })
            .pipe(map(credentials => {
                // login successful si hay un token en la respuesta
                if (credentials && credentials.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(credentials));
                    this.currentUserSubject.next(credentials);
                }

                return credentials;
            }));
    }

    logout() {
        // elimino las credenciales del localstorage al deslogearme
        localStorage.removeItem('currentUser');
       // this.currentUserSubject.next( null );
    }
}