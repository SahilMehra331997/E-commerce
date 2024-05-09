import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interface/user';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="container">
      <form  class="form-group" [formGroup]="signUpForm" (ngSubmit)="Submit()">
        <div class="row">
          <input type="text" formControlName="username" id="username" class="form__input" placeholder="Username/Email">
        </div>
        <div class="row">
          <input type="password" formControlName="password" id="password" class="form__input" placeholder="Password">
        </div>
        <div class="row">
           <input type="submit" value="Submit" class="btn" [disabled]="signUpForm.invalid">
        </div>
      </form>
    </div>
  `,
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  constructor(private userSrv:UserService,private toaster:HotToastService,private route:Router){}

  signUpForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });

  Submit() {
     console.log(this.signUpForm.value);
     this.userSrv.saveUser(this.signUpForm.value as User).pipe(this.toaster.observe({success:"Sign up successful"})).subscribe();
     this.signUpForm.reset();
      this.route.navigate(['/login'])
    }
  
}
