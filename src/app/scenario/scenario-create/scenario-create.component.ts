import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'abm-scenario-create',
	templateUrl: './scenario-create.component.html',
	styleUrls: ['./scenario-create.component.scss']
})
export class ScenarioCreateComponent implements OnInit {
	public form: FormGroup;

	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {
		this.form = this.fb.group({
		});
	}

}
