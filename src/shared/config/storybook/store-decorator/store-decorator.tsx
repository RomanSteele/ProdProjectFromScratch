import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '../../../../app/providers/store-provider';
import { loginReducer } from '../../../../features/auth-by-username/model/slice/login-slice';
import { profileReducer } from '../../../../entities/profile';
import { ReducersList } from '../../../lib/components/dynamic-module-loader/dynamic-module-loader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
