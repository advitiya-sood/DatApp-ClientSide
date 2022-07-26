import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
model: any={};

  constructor(public authService :AuthService, private alertify: AlertifyService, private router : Router) { }

  ngOnInit() {
  }

login(){
this.authService.login(this.model).subscribe(next=>{
  this.alertify.success("Login Sucessful");
  // this.router.navigate(['/list']);
}, error=>{
  this.alertify.error(" failed To login")
}
);
  }


  loggedIn(){
  return this.authService.loggedIn();
}


  logOut(){
    localStorage.removeItem("token");
    this.alertify.success("Sucessfully logedout");
    this.router.navigate(['/home'])
  }
}
