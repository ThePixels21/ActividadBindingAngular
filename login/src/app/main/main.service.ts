import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  urlBase = environment.API_URL
  url= Contants.POPULAR_MOVIES
  
  constructor(private http: HttpClient) {
    
  }

  login(login:Login) {
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer '+ environment.ACCESS_TOKEN
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>(this.urlBase+this.url,json,options)
  }
}
