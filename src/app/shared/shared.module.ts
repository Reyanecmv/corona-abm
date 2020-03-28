import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		NgbModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule
	],
	exports: [
		CommonModule,
		HttpClientModule,
		NgbModule,
		ReactiveFormsModule,
		FormsModule,
		NavbarComponent,
		RouterModule
	]
})
export class SharedModule {
}
