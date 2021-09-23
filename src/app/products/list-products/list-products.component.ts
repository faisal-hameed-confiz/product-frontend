import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productList: Product[];

  constructor(private productsService: ProductsService) { 
    this.productList = [];
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe( data => {
      this.productList = data.data;
    },
    error => {
      console.log(error);
    });
  }

}
