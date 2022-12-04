import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.services';
import { User } from 'src/app/model/user.model';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasePageComponent implements OnInit {

  public user!: User;
  public error: String;

  constructor(route: ActivatedRoute, private router: Router, /* private auth: AuthService */) {
    super(route);
    this.error = "";
  }

  override ngOnInit(): void {
    this.user = new User
  }

/*
  authenticate(form:NgForm): void {
    if (form.valid) {
      // Perform authentication
      this.auth.authenticate(this.user!).subscribe(data => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('admin/main');
        }
      });
    } else {
      this.error = 'Form Data Invalid';
    }
  }
  */
}
