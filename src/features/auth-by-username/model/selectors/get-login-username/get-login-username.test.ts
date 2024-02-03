import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './get-login-username';
import { StateSchema } from '../../../../../app/providers/store-provider';

describe('getLoginUsername.test', () => {
    test('should return username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
