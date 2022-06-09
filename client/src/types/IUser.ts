import { ITotalPrice } from './ICalculate';

interface IPlanData extends ITotalPrice {
	_id: string;
	region: string;
	cadastralNumber: string;
	agriculture: string;
	planData: IPlanData;
}
export interface IUser {
	id: string;
	email: string;
	username: string;
	areas: IPlanData[];
}

export interface IUserState {
	currentUser: IUser;
	isAuth: boolean;
	isLoading: boolean;
	error: string;
}
