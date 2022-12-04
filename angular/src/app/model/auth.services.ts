import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class AuthService {
    user: User;

    constructor(private datasource:RestDataSource) {
        this.user = new User();
    }

    get authenticated(): boolean {
        return this.datasource.loggedIn();
    }

    authenticate(user:User) : Observable<any> {
        return this.datasource.authenticate(user);
    }

    storeUserData(token: any, user: User): void {
        this.datasource.storeUserData(token, user);
    }

    logout(): Observable<any> {
        return this.datasource.logout();
    }
}