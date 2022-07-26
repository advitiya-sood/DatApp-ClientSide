import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt'
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient) { }
decodedToken : any;                // function in app.component
helper = new JwtHelperService();
baseUrl="http://localhost:5000/api/auth/"

login(model :any){
return  this.http.post(this.baseUrl+'login', model).pipe(
  map((response:any)=>{
    const user=response;

    if (user){
    console.log("two:",user)
      localStorage.setItem('token',user.token);
      this.decodedToken= this.helper.decodeToken(user.token);
    }
  })
);
}

register(model :any){
  return this.http.post(this.baseUrl+"register", model);
}

loggedIn(){
const istoken=localStorage.getItem('token');
return !this.helper.isTokenExpired(istoken!);

 }

}
