import { GeoModel } from './geo-model';

export interface BuildingInterface {
	type: BuildingTypeEnum;
	geometry: GeoModel;
	visitorCapacity: BuildingCapacity;
	staffCapacity: BuildingCapacity;
	status: SimulationItemStatusEnum;
}

export interface BuildingCapacity{
	total: number;
	used: number;
}

export enum BuildingTypeEnum {
	Office = 1,
	Flat = 2,
	Store = 3,
	Supermarket = 4,
	CoffeeShop = 5,
	Prison = 6,
	Hospital = 7,
	Parc = 8
}

export enum SimulationItemStatusEnum {
	Open = 1,
	Quarantined = 2
}


