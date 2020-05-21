import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root',
})

export class OmeleteService {
  public url: string = environment.OMELETE_BASE_URL
  

  constructor( private http: HttpClient ){}

 getProducts(search): Observable<any> {
    return this.http.get(this.url + search, { responseType: 'json' })
  }



}