import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FakeAuthService } from 'src/app/service/fake-auth.service';

@Component({
  selector: 'app-fake-login',
  templateUrl: './fake-login.component.html',
  styleUrls: ['./fake-login.component.scss']
})
export class FakeLoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  constructor(private _service: FakeAuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._service.login( { ...this.form.value } )
  }

  get isConnected(){
    return this._service.isConnected
  }

}
