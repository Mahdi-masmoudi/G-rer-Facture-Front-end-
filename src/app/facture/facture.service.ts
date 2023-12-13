import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from './facture';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  readonly apiURL = 'http://localhost:8887';

  /*------------------------------------------*/
  /*http://localhost:8887/Factures/add
   */
  constructor(private httpClient: HttpClient, private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Factures/');
  }
  getFacturesByClientId(clientId: number): Observable<any> {
    return this.http.get(`${this.apiURL}/Factures/client/${clientId}`);
  }
  create(facture: Facture): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/Factures/add`, facture);
  }

  find(_id: object): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Factures/' + _id);
  }

  update(_id: object, FId: Facture): Observable<any> {
    return this.httpClient.put(this.apiURL + '/Factures/' + _id, FId);
  }

  delete(_id: object) {
    return this.httpClient.delete(`${this.apiURL}/Factures/delete/${_id}`);
  }
}
