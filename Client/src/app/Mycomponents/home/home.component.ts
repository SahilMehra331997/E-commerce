import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
       <div>
         <div class="container">
            <button class="btn btn-success mt-3" (click)="getProducts('')">Products</button>
         </div>
         <div class="container-fluid d-flex justify-content-center">
            <button class="btn btn-danger ms-3" (click)="getProducts('Apparels')">Apparels</button>
            <button class="btn btn-danger ms-3" (click)="getProducts('Toys')">Toys</button>
            <button class="btn btn-danger ms-3" (click)="getProducts('Tools')">Tools</button>
            <button class="btn btn-danger ms-3" (click)="getProducts('Appliances')">Appliances</button>
         </div>
         <div class="container" *ngIf="products">
           <div class="product-tile" *ngFor="let product of products; let i = index">
             <img src="">
             <div class="product-details">
              <img src="download (3).jpeg">
                <h2 class="product-title">{{product.title}}</h2>
                <p class="product-price">Price : ₹{{product.price}}</p>
                <details>
                   <p class="product-color">Color : {{product.colors}}</p>
                   <p class="product-category">Category : {{product.category}}</p>
                   <p class="product-desc">Desc : {{product.desc}}</p>
                   <p class="product-size">size : {{product.size}}</p>
                   <p class="product-quantity">Quantity available: {{product.quantity}}</p>
                </details>
             </div>
           </div>
         </div>
      </div>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  private productSrv = inject(ProductService);

  products: Product[] = [];
  showDetails: boolean=true;
  constructor(private route:ActivatedRoute,private userSrv:UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
    let data:string = params['user'];
    this.userSrv.currentUser(data);
    });
  }

  getProducts(arg:string) {
    this.productSrv.getData().subscribe((response: any) => {
      if(arg)
      this.products = response.filter((ele:any) =>ele.category===arg);
      else
     this.products=response;   
  })
  }

}

