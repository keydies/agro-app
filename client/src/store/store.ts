import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from './reducers/userSlice';
import { registrationFormReducer } from './reducers/registrationFormSlice';
import { loginFormReducer } from './reducers/loginFormSlice';
import { headerBurgerReducer } from './reducers/headerBurgerSlice';

const rootReducer = combineReducers({
	userReducer,
	registrationFormReducer,
	loginFormReducer,
	headerBurgerReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
