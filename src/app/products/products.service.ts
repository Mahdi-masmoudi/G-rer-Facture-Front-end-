import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produit } from './produit';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  deleteProduct(productId: any) {
    throw new Error('Method not implemented.');
  }
  placeOrder(productId: number, quantityOrdered: number) {
    throw new Error('Method not implemented.');
  }
  readonly apiURL = 'http://localhost:8887';

  /*------------------------------------------*/

  constructor(private httpClient: HttpClient, private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/produits/');
  }

  create(product: Produit): Observable<any> {
    return this.httpClient.post(this.apiURL + '/produits/', product);
  }

  find(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/produits/' + _id);
  }

  update(_id: object, product: Produit): Observable<any> {
    return this.httpClient.put(this.apiURL + '/produits/' + _id, product);
  }

  delete(_id: object) {
    return this.http.get(`${this.apiURL}/produits/delete/${_id}`);
  }
}
