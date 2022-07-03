import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})
export class GetcountryService {
  country = {};

  constructor(
    private http : HttpClient
  ) { }

  
  getCountry(name : String){
    return this.http.get( `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
  }
}
