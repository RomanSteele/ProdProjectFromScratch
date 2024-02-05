import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '../../../../../entities/user';
import i18n from '../../../../../shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from '../../../../../shared/const/local-storage';
import { ThunkConfig } from '../../../../../app/providers/store-provider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(i18n.t('Wrong login or password'));
        }
    },
);
