import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../service/user';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EncDecService } from '@ecom/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router,
    private encService: EncDecService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe((response) => {
      //console.log(data);     
      if (response.status === 'Success') {
        const role = this.encService.encrypt(response.role!,'');
        sessionStorage.setItem('role', role);
        sessionStorage.setItem('token', response.data);
        this.navigate(response.role!);
      } else {
        this.snackBar.open(response.message, 'Login', {
          duration: 1000
        });
      }
    });
  }

  navigate(role: string) {
    switch (role) {
      case 'User':
        // redirect to User
        this.router.navigate(['/user/profile']);
        break;
      case 'Admin':
        // redirect to Admin
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        this.snackBar.open('User does not belongs to a valid role!', 'Login', {
          duration: 1000
        });
    }
  }

}