import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import { counterReducer } from '../../../../entities/counter';
import { userReducer } from '../../../../entities/user';
import { loginReducer } from '../../../../features/auth-by-username';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
