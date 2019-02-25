import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userService: UserService,
  ) { }

  username: string
  password: string
  error: boolean

  ngOnInit() {
    // for testing
    this.username = 'jbernal'
    this.password = 'KJ=L^3a(W+}rsjX'
    this.error = false
  }

  login(): void {

    interface resp {
      data: {
        token: string
      }
      status: boolean
    }

    interface user {
      status: boolean,
      data: {
        institution_profile: Array<institution>
      }
    }

    interface institution {
      institution: {
        id: string
      }
    }

    this.loginService.login({
      username: this.username,
      password: this.password
    }).subscribe(
      (data: resp) => {
        if (data.status === true) {
          localStorage.setItem('token', data.data.token);
          this.userService.me().subscribe(
            (dataUser: user) => {
              if (dataUser.status) {
                localStorage.setItem('institution', dataUser.data.institution_profile[0].institution.id)
                this.router.navigate(['oc'])
                return null
              }else{
                this.error = true
              }
            }
          )
        }else{
          this.error = true
        }
      }, error => {
        this.error = true
      });
  }
}
