import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() valuesFromHome:any;
@Output() RegisterCancle= new EventEmitter()
model:any={};
  constructor(private authservice:AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

submit(){
this.authservice.register(this.model).subscribe(()=>{
 this.alertify.success("registration was a success");
},error=>{
  console.log(error);
});
}

cancle(){
this.RegisterCancle.emit(false);
this.alertify.message("cancelled");
}

}
