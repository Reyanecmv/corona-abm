import { SimulationItemStatusEnum } from './building.interface';
import { GeoModel } from './geo-model';

export interface RoadInterface {
	geometry: GeoModel;
	width: number; // IN METERS
	status: SimulationItemStatusEnum;
}
