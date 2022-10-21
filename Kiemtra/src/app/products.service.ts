import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { Products } from "../app/model/products";
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://127.0.0.1:8000/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Products[]>{
    return this.httpClient.get<Products[]>(apiUrl);
  }
  store(product: Products): Observable<Products> {
    return this.httpClient.post<Products>(apiUrl + '/store/', product);
  }
  update(id: any, product: Products): Observable<Products> {
    return this.httpClient.put<Products>(`${apiUrl}/update/${id}`, product);
  }
  destroy(id: any): Observable<Products> {
    return this.httpClient.delete<Products>(`${apiUrl}/delete/${id}`);
  }
  show(id: any): Observable<Products> {
    return this.httpClient.get<Products>(`${apiUrl}/show/${id}`);
  }
  find(id: any): Observable<Products> {
    return this.httpClient.get<Products>(`${apiUrl}/edit/${id}`);
  } 
}