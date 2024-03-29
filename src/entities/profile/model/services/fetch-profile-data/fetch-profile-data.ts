import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../app/providers/store-provider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
