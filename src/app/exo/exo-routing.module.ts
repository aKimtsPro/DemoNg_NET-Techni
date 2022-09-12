import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ExoBindingComponent } from "./components/exo-binding/exo-binding.component";
import { ExoContainerComponent } from "./components/exo-container/exo-container.component";
import { ExoDirectiveComponent } from "./components/exo-directive/exo-directive.component";
import { ExoPipeComponent } from "./components/exo-pipe/exo-pipe.component";

const routes: Routes = [{
    path: '',
    component: ExoContainerComponent,
    children: [
        { path: '', component: AccueilComponent},
        { path: 'binding', component: ExoBindingComponent },
        { path: 'pipe', component: ExoPipeComponent },
        { path: 'directive', component: ExoDirectiveComponent },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExoRoutingModule{}