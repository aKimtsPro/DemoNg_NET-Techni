import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoContainerComponent } from './components/demo-container/demo-container.component';
import { DemoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ],
  exports: [
    DemoBindingComponent
  ]
})
export class DemoModule { }
