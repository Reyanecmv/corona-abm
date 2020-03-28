import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioCreateComponent } from './scenario-create/scenario-create.component';


const routes: Routes = [{ path: 'create', component: ScenarioCreateComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ScenarioRoutingModule {
}
