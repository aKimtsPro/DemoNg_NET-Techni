import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DemoBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DemoBindingComponent
  ]
})
export class DemoModule { }
