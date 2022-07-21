import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUser = { username : "", password: ""}

  constructor(
    private readonly _userService: UserService,
    private readonly  _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.dataUser.username || !this.dataUser.password) {
      console.log("LOS DATOS ESTAN INCOMPLETOS")     
    } else { 
      console.log(this.dataUser)
      this._userService.login(this.dataUser).subscribe(         
        res => {
          localStorage.setItem('token', res.access_token);
          /* location.href = '/homePage'; */

          this._router.navigate(['/homePage']); 
        });
    } 
  }

}
