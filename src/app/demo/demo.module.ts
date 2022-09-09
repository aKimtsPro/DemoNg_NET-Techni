import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoContainerComponent } from './components/demo-container/demo-container.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DirectiveComponent } from './components/directive/directive.component';
import { ParamComponent } from './components/param/param.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { AnimalPipe } from './pipes/animal.pipe';



@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoContainerComponent,
    DirectiveComponent,
    ParamComponent,
    PipeComponent,
    AnimalPipe
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
