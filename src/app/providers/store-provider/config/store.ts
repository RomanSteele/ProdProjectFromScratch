import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import { counterReducer } from '../../../../entities/counter';
import { userReducer } from '../../../../entities/user';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
