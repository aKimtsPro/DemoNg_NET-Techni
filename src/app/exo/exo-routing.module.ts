import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ExoBindingComponent } from "./components/exo-binding/exo-binding.component";
import { ExoContainerComponent } from "./components/exo-container/exo-container.component";
import { ExoPipeComponent } from "./components/exo-pipe/exo-pipe.component";

const routes: Routes = [{
    path: '',
    component: ExoContainerComponent,
    children: [
        { path: 'binding', component: ExoBindingComponent },
        { path: 'pipe', component: ExoPipeComponent },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExoRoutingModule{}