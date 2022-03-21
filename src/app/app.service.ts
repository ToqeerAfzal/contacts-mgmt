import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getContacts(){
    return this.http.get("https://6238b1a700ed1dbc5ab64a18.mockapi.io/contacts");
  }

  getContactDetail(id:string){
    return this.http.get(`https://6238b1a700ed1dbc5ab64a18.mockapi.io/contacts/${id}`);
  }
}
