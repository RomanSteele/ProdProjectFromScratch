import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from '../const/local-storage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
    },
});
