import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  protected url = "http://localhost:8080"
  getDept():Observable<any> {
    return this.http.get(`${this.url}/api/all`).pipe(map(res=> res));
  }

  getDeptById(id:Number):Observable<any> {
    return this.http.get(`${this.url}/api/all/${id}`).pipe(map(res=> res));
  }
}
