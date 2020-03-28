import { PersonModel } from './person.interface';

export class SimulationModel {
	simulationId: number;
	people: PersonModel[];
	totalInfected: number;
	totalCured: number;
	totalDead: number;
	simulationStep: number; // sim time elapsed
	timeStep: number // days
}
