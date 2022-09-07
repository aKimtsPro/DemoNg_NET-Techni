import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoContainerComponent } from './components/demo-container/demo-container.component';

const routes : Routes = [
    { path: '', component: DemoContainerComponent, children: [
        { path: 'binding', component: DemoBindingComponent }
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule{}