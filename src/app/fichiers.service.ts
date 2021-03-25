import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fichiers } from './fichiers';

@Injectable({
  providedIn: 'root'
})
export class FichiersService {
//private baseUrl="http://localhost:8090/api/Fichiers";
  

  constructor(private http :HttpClient) {this.http=http; }

  saveFile(formData:FormData):Observable<any>
  {return this.http.post('http://localhost:8081/saveFile',formData);}
}