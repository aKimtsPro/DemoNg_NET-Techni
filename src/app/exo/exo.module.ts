import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './components/exo-binding/exo-binding.component';



@NgModule({
  declarations: [
    ExoBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ExoBindingComponent
  ]
})
export class ExoModule { }
