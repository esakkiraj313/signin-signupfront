import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  mobileNumber: any;
  countryCode: any;
  signuploader: any;

  constructor(public service: ServiceService, public router: Router) {}

  ngOnInit() {}
  public signup = () => {
    this.signuploader = false;
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      mobileNumber: this.mobileNumber,
      countryCode: this.countryCode,
    };
    this.service.signup(data).subscribe((data: any) => {
      console.log(data);
      if (data.status===200) {
        this.signuploader = true;
          this.router.navigate(['/signin']);
      } else {
        this.signuploader = true;
        alert(data.message)
      }
    });
  };
}
