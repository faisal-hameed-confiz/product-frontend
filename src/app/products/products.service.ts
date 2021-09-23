import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productURL = 'http://productportal-env.eba-xwictju7.us-east-2.elasticbeanstalk.com/api/products';

  constructor(private httpClinet: HttpClient) { }

  createProduct(productBody: any): Observable<any> {
    return this.httpClinet.post(this.productURL + "/create-product", productBody);
  }

  getAllProducts(): Observable<any> {
    return this.httpClinet.get(this.productURL + "/get-all");
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
