import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiGetComponent } from './components/api-get/api-get.component';
import { CommuParentComponent } from './components/commu-parent/commu-parent.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoContainerComponent } from './components/demo-container/demo-container.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';
import { FormsComponent } from './components/forms/forms.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ParamComponent } from './components/param/param.component';
import { PipeComponent } from './components/pipe/pipe.component';

const routes : Routes = [
    { path: '', component: DemoContainerComponent, children: [
        { path: 'binding', component: DemoBindingComponent },
        { path: 'param/:nbr', component: ParamComponent },
        { path: 'directive', component: DirectiveComponent },
        { path: 'pipe', component: PipeComponent },
        { path: 'parent', component: CommuParentComponent },
        { path: 'forms', component: FormsComponent },
        { path: 'service', component: FakeLoginComponent },
        { path: 'observable', component: ObservablesComponent },
        { path: 'get', component: ApiGetComponent },
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule{}