import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
   
<div class="container">
  <div class="row mt-4">
    <div class="col-md-4 offset-md-4">
      <div class="card">
        <div class="card-header">
          <h2 class="text-center">SIGNIN</h2>
        </div>
        <div class="card-body">      
          <div class="form-group">
            <label for="username">USERNAME:</label>
            <input type="text" name="username" [(ngModel)]="loginForm.username" class="form-control">
          </div>
          <div class="form-group">
            <label for="password">PASSWORD:</label>
            <input type="password" name="password" [(ngModel)]="loginForm.password" class="form-control">
          </div>
          <div class="form-group d-grid gap-2 mt-4">
            <button (click)="login()" class="btn-primary btn-lg btn-block">SIGNIN</button>
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
    private _toastr: ToastrService,
  ) {}

  ngOnInit(): void {}

  login() {
    this._toastr.success('success');
  }
}