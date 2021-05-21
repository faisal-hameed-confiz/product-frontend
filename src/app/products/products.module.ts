import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchProductComponent } from './search-product/search-product.component';

import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, 
    CreateProductComponent,
    ViewProductComponent,
    ListProductsComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    SearchProductComponent,
    ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class ProductsModule { }
