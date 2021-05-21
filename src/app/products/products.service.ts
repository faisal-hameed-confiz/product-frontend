import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/Http';
import { Product } from './product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productURL = 'http://localhost:8080/api/products';

  constructor(private httpClinet: HttpClient) { }

  createProduct(productBody: any): Observable<any> {
    return this.httpClinet.post(this.productURL, productBody);
  }

  getAllProducts(): Observable<any> {
    return this.httpClinet.get(this.productURL);
  }

  viewProduct(productId: any): Observable<any> {
    return this.httpClinet.get(this.productURL + "/get-detail" + '?productId=' + productId);
  }

  updateProduct(productId: any, productBody: any): Observable<any> {
    return this.httpClinet.put(this.productURL + '/update-product' + '?productId=' + productId, productBody);
  }

  deleteProduct(productId: any): Observable<any> {
    return this.httpClinet.delete(this.productURL + '/delete-product' + '?productId=' + productId);
  }
}
