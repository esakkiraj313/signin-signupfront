import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  password: any;
  email: any;
  fullname: any;
  signinloader: any;

  constructor(public service: ServiceService, public router: Router) {}

  ngOnInit() {}
  public signin = () => {
    this.signinloader = false;
    let data = {
      email: this.email,
      password: this.password,
    };
    this.service.signin(data).subscribe((data: any) => {
      this.signinloader = true;
      if (data.status === 200) {
        this.router.navigate(['/home']);
      } else {
        this.signinloader = true;
        alert(data.message)
      }
    });
  };
}
