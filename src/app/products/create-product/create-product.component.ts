import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService, private route:Router) { }

  ngOnInit(): void {
  }

  addNewProduct(form: any) {
    
    let newProduct = {
      name: form.value.product_name,
      description: form.value.product_descp,
      rating: form.value.rating,
      price: form.value.product_price,
      image: form.value.product_image,
      reviews: form.value.reviews
    }

    this.productsService.createProduct(newProduct).subscribe( data => {
      this.route.navigate(['/products']);
    },
    error => {
      console.log(error);
    });
  }

}
