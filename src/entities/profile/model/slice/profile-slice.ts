import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';
import { USER_LOCAL_STORAGE_KEY } from '../../../../shared/const/local-storage';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
