import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BasePageComponent implements OnInit {

  public error: String;
  public user: User;

  constructor(route: ActivatedRoute, router: Router) {
    super(route);
    this.error = "";
    this.user = new User();
  }

  override ngOnInit(): void {
  }

}
