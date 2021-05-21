import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId = 0;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.deleteProduct(this.productId).subscribe( data => {
        this.route.navigate(['/products']);
      },
      error => {
        console.log(error);
      });
    })
  }

}
