import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "./Mycomponents/auth/admin/admin.component";
import { NavbarComponent } from "./Mycomponents/navbar/navbar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AdminComponent, NavbarComponent]
})
export class AppComponent {
  title = 'FS-project';
}
