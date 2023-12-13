import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Detailproducts } from './detailproducts';

@Injectable({
  providedIn: 'root',
})
export class DetailproductsService {
  readonly apiURL = 'http://localhost:8887';

  /*------------------------------------------*/

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/factureDetails/');
  }

  create(dpoducts: Detailproducts): Observable<any> {
    return this.httpClient.post(this.apiURL + '/factureDetails/', dpoducts);
  }

  find(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/factureDetails/' + _id);
  }

  update(_id: object, dpoducts: Detailproducts): Observable<any> {
    return this.httpClient.put(
      this.apiURL + '/factureDetails/' + _id,
      dpoducts
    );
  }

  delete(_id: object) {
    return this.httpClient.delete(this.apiURL + '/factureDetails/' + _id);
  }
}
