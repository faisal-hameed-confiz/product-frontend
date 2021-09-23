import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;
  productDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).subscribe( data => {
        this.productDetails = data.data;
      },
      error => {
        console.log(error);
      });
    })
  }

  updateProduct(form: any) {
    
    const updateProduct = {
      name: form.value.product_name,
      description: form.value.product_descp,
      rating: form.value.rating,
      price: form.value.product_price,
      image: form.value.product_image,
      reviews: form.value.reviews
    }

    this.productsService.updateProduct(this.productId, updateProduct).subscribe( data => {
      this.route.navigate(['/products/view-product/' + this.productId]);
    },
    error => {
      console.log(error);
    });
  }
}
