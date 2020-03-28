import { BuildingInterface } from './building.interface';
import { GeoModel } from './geo-model';

export class ScenarioModel {
	geometry: GeoModel; // Coordinates of the simulation area
	buildings: BuildingInterface[];
	people: ScenarioPeopleModel;
	duration: number; // number of days
}

export class ScenarioPeopleModel {
	totalPopulation: number;
	gender: ScenarioGenderModel;
	ageGroups: AgeGroupsModel;
	infected: number; // percentage
	locations: ScenarioPeopleLocationsModel;
}

export class ScenarioGenderModel {
	male: number;
	female: number;
}

export class AgeGroupsModel { // percentages
	preTeens: number;
	teens: number;
	twenties: number;
	thirties: number;
	forties: number;
	fifties: number;
	sixties: number;
	seventies: number;
	eightiesAndAbove: number;
}

export class ScenarioPeopleLocationsModel{
	office: number;
	flat: number;
	store: number;
	supermarket: number;
	coffeeShop: number;
	prison: number;
	hospital: number;
	parc: number;
}


