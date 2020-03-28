import { GeoModel } from './geo-model';
import { BuildingTypeEnum } from './building.interface';

export interface PersonInterface {
	gender: GenderEnum;
	age: number;
	preExistingConditions: ConditionsEnum;
	status: PersonStatusEnum;
	possibleActions: PossibleActionsEnum;
	currentAction: PossibleActionsEnum;
	currentLocation: Coordinates;
}

export enum GenderEnum {
	Male = 1,
	Female = 2,
}

export enum PersonStatusEnum {
	Healthy = 1,
	Infected = 2,
	Zombie = 3,
	Incarcerated = 4,
	Hospitalized = 5,
	Dead = 6
}

export enum PossibleActionsEnum {
	Stay = 1,
	MoveTo = 2
}

export enum ConditionsEnum {
	NoCondition = 1,
	MildIllness = 2,
	SeverIllness = 3,
	ChronicDisease = 4
}
