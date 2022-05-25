export interface IUser {
	id: string;
	email: string;
	username: string;
}

export interface IUserState {
	currentUser: IUser;
	isAuth: boolean;
	isLoading: boolean;
	error: string;
}
