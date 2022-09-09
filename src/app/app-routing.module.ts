import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Page404Component } from './components/page404/page404.component';
import { DemoBindingComponent } from './demo/components/demo-binding/demo-binding.component';
import { ExoBindingComponent } from './exo/components/exo-binding/exo-binding.component';
import { DemoExportComponent } from './shared/components/demo-export/demo-export.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  {
    path: 'demo', 
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'exo', 
    loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule)
  },
  { path: 'module/import', component: DemoExportComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
