import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenarioRoutingModule } from './scenario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ScenarioCreateComponent } from './scenario-create/scenario-create.component';


@NgModule({
	declarations: [ScenarioCreateComponent],
	imports: [
		SharedModule,
		ScenarioRoutingModule
	]
})
export class ScenarioModule {
}
