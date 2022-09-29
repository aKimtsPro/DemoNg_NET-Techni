import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoContainerComponent } from './components/demo-container/demo-container.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DirectiveComponent } from './components/directive/directive.component';
import { ParamComponent } from './components/param/param.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { AnimalPipe } from './pipes/animal.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CommuParentComponent } from './components/commu-parent/commu-parent.component';
import { CommuEnfantComponent } from './components/commu-parent/commu-enfant/commu-enfant.component';
import { FormsComponent } from './components/forms/forms.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ObsClickDirective } from './directives/obs-click.directive';



@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoContainerComponent,
    DirectiveComponent,
    ParamComponent,
    PipeComponent,
    AnimalPipe,
    HighlightDirective,
    CommuParentComponent,
    CommuEnfantComponent,
    FormsComponent,
    FakeLoginComponent,
    ObservablesComponent,
    ObsClickDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DemoBindingComponent
  ]
})
export class DemoModule { }
