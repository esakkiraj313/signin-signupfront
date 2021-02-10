import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseurl: string;
  constructor(public http: HttpClient) {
    this.baseurl = 'http://localhost:3000/api/v1/users';
  }

  public signup = (data:any) => {
    console.log(data)
    let params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('email', data.email)
      .set('password', data.password)
      .set('mobileNumber', data.mobileNumber)
      .set('countryCode', data.countryCode);
    let datas = this.http.post(`${this.baseurl}/signup`, params);
    return datas;
  };
  public signin = (data: any) => {
    let params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
    let datas = this.http.post(`${this.baseurl}/signin`, params);
    return datas;
  };
}
