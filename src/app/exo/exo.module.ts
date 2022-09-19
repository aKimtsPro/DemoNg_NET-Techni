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
import { ExoCommuComponent } from './components/exo-commu/exo-commu.component';
import { ListeComponent } from './components/exo-commu/liste/liste.component';
import { AjouterComponent } from './components/exo-commu/ajouter/ajouter.component';



@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoContainerComponent,
    TimePipe,
    ExoPipeComponent,
    ExoDirectiveComponent,
    AccueilComponent,
    CopyDirective,
    ExoCommuComponent,
    ListeComponent,
    AjouterComponent
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
