import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgbAlertModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  reg:FormGroup=new FormGroup({
    username:new FormControl<String>(''),
    password:new FormControl<String>(''),
  });
  submitted=false;
  isSuccess=false;
  alertType="success"
  alertClosed=false
  user={
    name:"",
    mobile:"",
    email:"",
    address:"",
  };
  constructor(private formBuilder:FormBuilder, private userService:UserService){}
  ngOnInit(){
    this.reg=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  };
  get f():{[key:string]:AbstractControl}{
    return this.reg.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.reg.invalid){
      return;
    }
    this.userService.create(this.reg.value).subscribe(reg=>{
      console.log("Successfully added")
      this.isSuccess=true;
      this.reg.reset()
      this.submitted=false;
      //setTimeout(()=>{this.alertClosed,2000});
    })
    console.log(JSON.stringify(this.reg.value,null,2));
  }

}
