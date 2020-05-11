import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorage} from '../../../commons/services/localStorage.service'
import { UserService } from '../../../commons/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private router: Router ,private userService: UserService) { }

  login() {

    const user = {
      email: 'test@email.com',
      password: 'password'
    };
    this.userService.login(this.user).subscribe((res: any) => {
      console.log(res);
      LocalStorage.set('token', res.token);
      this.router.navigateByUrl('/private/dashboard');
    });
  }

  ngOnInit() {
  }

}
