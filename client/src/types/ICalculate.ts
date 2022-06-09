interface IWheat {
	t: number;
	n1: number;
	p: number;
	s: number;
	c: number;
	g: number;
	f: number;
	m: number;
	i: number;
	k: number;
}
interface ICorn {
	t: number;
	n1: number;
	p: number;
	s: number;
	c: number;
	g: number;
	f: number;
	m: number;
	i: number;
	k: number;
	x: number;
}
interface ISunflowerAndSoy {
	t: number;
	n1: number;
	p: number;
	s: number;
	c: number;
	g: number;
	f: number;
	m: number;
	i: number;
	k: number;
}

export interface ITotalPrice {
	totalPrice: number;
	DT: number;
	seed: number;
	fertilizers: number;
	sulfate: number;
	saltpeter: number;
	herbicide: number;
	fungicide: number;
	microMinerals: number;
	insecticide: number;
	urea: number;
	zinc: number;
}
export interface ICalculateState {
	wheat: IWheat;
	corn: ICorn;
	sunflower: ISunflowerAndSoy;
	totalPrice: ITotalPrice;
}
