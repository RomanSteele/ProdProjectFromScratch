import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './get-counter';
import { StateSchema } from '../../../../../app/providers/store-provider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
