import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GarageService {
  readonly API_URL = 'http://localhost:8887';
  readonly ENDPOINT_CARS = '/cars';

  constructor(private httpClient: HttpClient) {}
  getCars() {
    return this.httpClient;
  }
}
