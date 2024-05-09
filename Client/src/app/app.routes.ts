import { Routes } from '@angular/router';
import { HomeComponent } from './Mycomponents/home/home.component';



export const routes: Routes = [{path:"",component:HomeComponent},
                               {path:"contact",loadComponent:()=>import("./Mycomponents/contact/contact.component").then(c=>c.ContactComponent)},
                               {path:"admin",loadComponent:()=>import("./Mycomponents/auth/admin/admin.component").then(c=>c.AdminComponent)},
                               {path:"about",loadComponent:()=>import("./Mycomponents/about/about.component").then(c=>c.AboutComponent)},
                               {path:"login",loadComponent:()=>import("./Mycomponents/auth/login/login.component").then(c=>c.LoginComponent)},
                               {path:"adminpage",loadComponent:()=>import("./Mycomponents/admin-page/admin-page.component").then(c=>c.AdminPageComponent)},
                               {path:"signup",loadComponent:()=>import("./Mycomponents/auth/signup/signup.component").then(c=>c.SignupComponent)},
                           
                
]
