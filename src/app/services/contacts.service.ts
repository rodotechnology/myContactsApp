import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontacts } from '../interfaces/icontacts';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.api_url

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private http: HttpClient ) { }

  getContacts(): Observable<Icontacts>{
    const params = new HttpParams()
    .set('results', 8)
    .set('nat', 'ES')
    .set('seed', '9f7c17fdbca68c01')

    return this.http.get<Icontacts>(apiUrl, { params });
  }
}

