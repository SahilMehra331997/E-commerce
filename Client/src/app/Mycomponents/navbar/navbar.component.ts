import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  template: `
 <div class="container d-flex justify-content-between">
    <nav class="nav">
         <a routerLink="/">Home</a>
         <a routerLink="/contact">Contact</a>
         <a routerLink="/about">About</a>
    </nav>
    <div>
      <button class="btn btn-secondary mb-1" routerLink="/admin">Admin</button>
    </div>
</div>

  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


}