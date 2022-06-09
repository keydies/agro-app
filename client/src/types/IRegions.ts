export interface IRegions {
	_id: string;
	regionName: string;
}

export interface IRegionState {
	regions: IRegions[];
	searchedRegion: IRegions[];
	searchActive: boolean;
}
