import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './components/exo-binding/exo-binding.component';
import { ExoContainerComponent } from './components/exo-container/exo-container.component';
import { ExoRoutingModule } from './exo-routing.module';
import { TimePipe } from './pipes/time.pipe';
import { ExoPipeComponent } from './components/exo-pipe/exo-pipe.component';
import { ExoDirectiveComponent } from './components/exo-directive/exo-directive.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CopyDirective } from './directives/copy.directive';



@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoContainerComponent,
    TimePipe,
    ExoPipeComponent,
    ExoDirectiveComponent,
    AccueilComponent,
    CopyDirective
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
