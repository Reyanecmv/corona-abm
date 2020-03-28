export enum GeoModelTypeEnum {
	Point = 1,
	Line = 2,
	Polygon = 3
}

export interface CoordinatesModel {
	x: number;
	y: number;
}

export interface GeoModel {
	type: GeoModelTypeEnum,
	coordinates: CoordinatesModel[];
}
