import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  template: `
      <div class="back">
            <button class="btn1" routerLink="/">Back</button>
        </div>
        <h2>ADD PRODUCT</h2>
      <div class="container">
                 <form [formGroup]="productForm" class="form-group" (ngSubmit)="Submit()">
                        <div class="row">
                            <input type="text" formControlName="title" id="title" class="form__input" placeholder="Product title">
                        </div>
                        <div class="row">
                            <input type="text" formControlName="price" id="price" class="form__input" placeholder="Price">
                        </div>
                        <div class="row">
                            <select formControlName="category">
                            <option value="" disabled selected>Category</option>
                                <option>Apparels</option>
                                <option>Toys</option>
                                <option>Appliances</option>
                                <option>Tools</option>
                            </select>
                        </div>
                        <div class="row" *ngIf="productForm.get('category')!.value === 'Apparels'">
                           <input type="text" formControlName="colors" id="colors" class="form__input" placeholder="Put the colors available">
                        </div>
                        <div class="row">
                            <input type="text" formControlName="desc" id="desc" class="form__input" placeholder="Description">
                        </div>
                        <div class="row" *ngIf="productForm.get('category')!.value === 'Apparels'">
                            <select formControlName="size">
                              <option value="" disabled selected>Size</option>
                              <option>X-Small</option>
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Large</option>
                              <option>X-Large</option>
                              <option>XX-Large</option>
                            </select>
                        </div>
                        <div class="row" *ngIf="productForm.get('category')!.value === 'Toys'">
                            <select formControlName="size">
                              <option value="" disabled selected>Age group</option>
                              <option>1-3</option>
                              <option>3-8</option>
                              <option>8-12</option>
                              <option>12 above</option>
                           </select>
                        </div>
                        <div class="row">
                            <input type="text" formControlName="quantity" id="quantity" class="form__input" placeholder="Quantity available for product ">
                        </div>
                        <div class="row">
                            <input type="file" formControlName="image" placeholder="Choose a image" (change)="onChange($event)">
                        </div>
                        <div class="row">
                            <input type="submit" value="Submit" class="btn" [disabled]="productForm.invalid">
                        </div>
                 </form>
             <div class="img-div">
                 <img [src]="this.imageUrl || './assets/default.png'">
             </div> 
      </div>
  `,
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {


    imageUrl:any;
    private productSrv=inject(ProductService)
    private toaster=inject(HotToastService);

       productForm=new FormGroup({
      title:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      category:new FormControl(''),
      colors:new FormControl(''),
      desc:new FormControl(''),
      size:new FormControl(''),
      quantity:new FormControl(''),
      image:new FormControl(''),

  })

  onChange(event:any)
  {
    const file:File=event.target.files[0];   
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);

  }
  Submit() {
    if(this.productForm.valid)
    {
        if(this.productForm.get('colors')!.value === "")
               this.productForm.value.colors="not applicable";
        if(this.productForm.get('size')!.value === "")
                this.productForm.value.size="not applicable";

     let res:Product=this.productForm.value as any;
    this.productSrv.uploadData(res).pipe(this.toaster.observe({
        success:"Product added successfully",
        error:"Product not added.."
    })).subscribe();
    this.productForm.reset();
   }
  }
}
