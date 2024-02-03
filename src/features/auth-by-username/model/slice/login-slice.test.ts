import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login-schema';
import { loginActions, loginReducer } from './login-slice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('username1'),
        )).toEqual({ username: 'username1' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('password1'),
        )).toEqual({ password: 'password1' });
    });
});
