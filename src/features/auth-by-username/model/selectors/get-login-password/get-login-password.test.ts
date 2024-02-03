import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginPassword } from './get-login-password';
import { StateSchema } from '../../../../../app/providers/store-provider';

describe('getLoginPassword.test', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
