import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Credentials{
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private _connected: boolean = false;

  constructor() { }

  login(creds: Credentials){
    if( creds.username == 'pol' && creds.password == 'pass' ){
      localStorage.setItem('user', creds.username);
    }
  }

  logout(){
    if( this._connected )
      localStorage.removeItem('user');
  }

  get isConnected(): boolean{
    return localStorage.getItem('user') != undefined;
  }

}
