import { Injectable } from '@angular/core';
import {Car} from './models/car';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl = 'http://localhost:3000/api/cars';
  private handleError: 'error';
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    // @ts-ignore
    return this.http.get(this.apiUrl);
  }
  getCar(id: number): Observable<Car> {
    // @ts-ignore
    return this.http.get(this.apiUrl + `/${id}`);
  }
  addCar(data): Observable<Car> {
    // @ts-ignore
    return this.http.post(this.apiUrl, data);
  }
  updateCar(id: number, data): Observable<Car> {
    // @ts-ignore
    return this.http.put(this.apiUrl + `/${id}`, data);
  }
  deleteCar(id: number): Observable<Car> {
    // @ts-ignore
    return this.http.delete(this.apiUrl + `/${id}`);
  }
}
