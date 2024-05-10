import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  template: `
 <div class="container">
    <nav class="nav">
         <a routerLink="/">Home</a>
         <a routerLink="/contact">Contact</a>
         <a routerLink="/about">About</a>
    </nav>
    <div class="btn-container">
       <div class="dropdown" *ngIf="user;else elseblock">
          <button class="btn btn-primary dropdown-toggle mb-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img [src]="'./assets/default.png'" height="30px" width="30px" class="rounded-circle me-1" >{{user}}<i class="fa fa-caret-down"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" routerLink="/profile">Profile</a></li>
            <li><a class="dropdown-item" routerLink="/login" (click)="logout()">Logout</a></li>
          </ul>
        </div>
      <ng-template #elseblock>
        <button class="btn btn-primary mb-1 me-1" routerLink="/login">Login</button>
      </ng-template>
      <button class="btn btn-secondary mb-1" routerLink="/admin">Admin</button>
    </div>
</div>

  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

    user:string='';
    subscription: Subscription;
    constructor(private userService:UserService){ }
    ngOnInit(): void {
      this.subscription = this.userService.user.subscribe((username:any) => {
        this.user = username;
    })
  }
  logout() {
    this.userService.currentUser('');
    console.log(this.user);
    }

}