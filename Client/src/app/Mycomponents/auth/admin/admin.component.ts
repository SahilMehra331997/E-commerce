import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
                 <div class="container-fluid">
                    <form [formGroup]="adminForm" class="form-group" (ngSubmit)="Submit()">
                        <div class="row">
                            <input type="text" formControlName="email" id="email" class="form__input" placeholder="email/name">
                            <span *ngIf="adminForm && adminForm.get('email')?.invalid && (adminForm.get('email')?.dirty || adminForm.get('email')?.touched)" class="invalid-feedback">
                                <i class="fas fa-exclamation-circle"></i>
                                <span *ngIf="adminForm && adminForm.get('email')?.errors?.['required']">email is required.</span>
                            </span>
                        </div>
                        <div class="row">
                            <input type="password" formControlName="password" id="password" class="form__input" placeholder="Password">
                            <span *ngIf="adminForm && adminForm.get('password')?.invalid && (adminForm.get('password')?.dirty || adminForm.get('password')?.touched)" class="invalid-feedback">
                                <i class="fas fa-exclamation-circle"></i>
                                <span *ngIf="adminForm && adminForm.get('password')?.errors?.['required']">Password is required.</span>
                                <span *ngIf="adminForm && adminForm.get('password')?.errors?.['minlength']">Password must be at least 6 characters long.</span>
                            </span>
                        </div>
                        <div class="row">
                            <input type="submit" value="Submit" class="btn" [disabled]="adminForm.invalid">
                        </div>
                    </form>
                </div>
  `,
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  private authService=inject(AuthService)
  private hotToast=inject(HotToastService)
  private route=inject(Router)

  data:any[]=[];

  adminForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  Submit() {
    this.authService.getData().subscribe((response:any[])=>{
      this.data = response;
      console.log("result is : ",response)
      let found:boolean=false;
      this.data.map((admin:any)=>{
          if(admin.email===this.adminForm.value.email && admin.password===this.adminForm.value.password)
            {
              this.hotToast.success('Login Success');
              this.route.navigate(['/']);
              found=true;
            }
        });
        if(!found)
        this.hotToast.error('Login failed , Invalid Email or Password'); 
      });
     
  }
}
