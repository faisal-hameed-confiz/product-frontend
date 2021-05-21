import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  searchCategory = '';
  productList: Product[];

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { 
    this.productList = [];
  }

  ngOnInit(): void {
  
  }
}
