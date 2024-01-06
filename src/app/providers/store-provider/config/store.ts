import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import { counterReducer } from '../../../../entities/counter';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
