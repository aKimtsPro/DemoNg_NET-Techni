import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TABLETOP_FORM, TABLETOP_FORM_OPTS } from './tabletop.form';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group(TABLETOP_FORM, TABLETOP_FORM_OPTS);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log( this.form )

    if( this.form.valid ){
      alert("C'est valide")
      console.log( this.form.value )
    }
    else
      alert("C'est invalide")
  }

}
