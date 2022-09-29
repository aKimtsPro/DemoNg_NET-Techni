import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ExoBindingComponent } from "./components/exo-binding/exo-binding.component";
import { ExoCommuComponent } from "./components/exo-commu/exo-commu.component";
import { ExoContainerComponent } from "./components/exo-container/exo-container.component";
import { ExoDirectiveComponent } from "./components/exo-directive/exo-directive.component";
import { ExoPipeComponent } from "./components/exo-pipe/exo-pipe.component";
import { ExoFormsComponent } from "./components/exo-forms/exo-forms.component";
import { ExoServiceComponent } from "./components/exo-service/exo-service.component";

const routes: Routes = [{
    path: '',
    component: ExoContainerComponent,
    children: [
        { path: '', component: AccueilComponent},
        { path: 'binding', component: ExoBindingComponent },
        { path: 'pipe', component: ExoPipeComponent },
        { path: 'directive', component: ExoDirectiveComponent },
        { path: 'commu', component: ExoCommuComponent },
        { path: 'form', component: ExoFormsComponent },
        { path: 'service', component: ExoServiceComponent },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExoRoutingModule{}