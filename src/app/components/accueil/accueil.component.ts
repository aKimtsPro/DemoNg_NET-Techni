import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from 'src/app/service/fake-auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private _service: FakeAuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this._service.logout();
  }

  get isConnected(){
    return this._service.isConnected
  }

}
