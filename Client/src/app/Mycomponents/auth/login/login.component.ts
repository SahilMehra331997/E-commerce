import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interface/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  template: `
   
<div class="container">
  <div class="row mt-4">
    <div class="col-md-4 offset-md-4">
      <div class="card">
        <div class="card-header">
          <h2 class="text-center">SIGNIN</h2>
        </div>
        <div class="card-body">      
          <div class="form-group mt-3">
            <input type="text" name="username" [(ngModel)]="loginForm.username" class="form-control" placeholder="Username">
          </div>
          <div class="form-group mt-3">
            <input type="password" name="password" [(ngModel)]="loginForm.password" class="form-control" placeholder="Password">
          </div>
          <div class="form-group d-grid gap-2 mt-4">
            <button (click)="login()" class="btn btn-primary btn-lg btn-block">SIGNIN</button>
          </div>
            <div class="form-group mt-3 d-flex justify-content-center">
              <p>Don't have an account <a routerLink="/signup">Sign-up</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = {
    username: '',
    password: '',
  };

  constructor(
    private toastr:HotToastService,private userSrv:UserService
  ) {}

  ngOnInit(): void {}

  login() {
    this.userSrv.getUser().subscribe((res:User[])=>{
      let success:boolean=false;
      res.map((user:any)=>{
      if(this.loginForm.username===user.username && this.loginForm.password===user.password){
      this.toastr.success('Login Successful');
      success=true;
      }
      });
      if(!success)
        this.toastr.error('Login Failed')
    });
  }
}