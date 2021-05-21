import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {

  productId = 0;
  product: any;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).subscribe(data =>{
        this.product = data;
      },
      error => {
        console.log(error);
      });
    })
  }
}
