import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
 
  api = environment.apiUrl;

 getAllSaries = (): Observable<any> => {
  return this.http.get(`${this.api}Products`);
 };

}
