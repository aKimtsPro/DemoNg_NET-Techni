import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from '../produit.model';
import { PRODUIT_FORM, PRODUIT_FORM_OPTS } from './produit.form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  @Output()
  created= new EventEmitter<Produit>()

  constructor(builder: FormBuilder) {
    this.form = builder.group(PRODUIT_FORM, PRODUIT_FORM_OPTS); 
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log(this.form)

    if( this.form.valid ){
      this.created.emit( {
        categorie: this.form.value.categorie,
        nom: this.form.value.nom,
        marque: this.form.value.marque,
        desc: this.form.value.desc,
        peremption: new Date( this.form.value.peremption ),
        prix: this.form.value.prix
      } );
      this.form.reset();
    }
    else
      alert('invalid')
  }

}
