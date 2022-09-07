import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './demo/components/demo-binding/demo-binding.component';
import { ExoBindingComponent } from './exo/components/exo-binding/exo-binding.component';

const routes: Routes = [
  { path: 'demo/binding', component: DemoBindingComponent },
  { path: 'exo/binding', component: ExoBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
