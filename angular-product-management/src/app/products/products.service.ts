import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Products } from './products';
import { Observable } from 'rxjs';
let api_url = environment.api_url+'products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private _HttpClient: HttpClient) { 

  }
  getAll():Observable<Products[]>{
    return this._HttpClient.get<Products[]>(api_url);
  }
  update(id:any, data:Products){
    return this._HttpClient.put<Products>(api_url+'/'+id,data);
  }
  store(data:Products){
    return this._HttpClient.post<Products>(api_url,data);
  }
  delete(id:any){
    return this._HttpClient.delete<Products>(api_url+'/'+id);
  }
  find(id:any){
    return this._HttpClient.get<Products>(api_url+'/'+id);
  }
}
