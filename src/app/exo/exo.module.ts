import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './components/exo-binding/exo-binding.component';
import { ExoContainerComponent } from './components/exo-container/exo-container.component';
import { ExoRoutingModule } from './exo-routing.module';



@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule
  ],
  exports:[
    ExoBindingComponent
  ]
})
export class ExoModule { }
