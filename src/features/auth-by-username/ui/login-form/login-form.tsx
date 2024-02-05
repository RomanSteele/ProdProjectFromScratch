import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './login-form.module.scss';
import Button, { ButtonTheme } from '../../../../shared/ui/button/button';
import Input from '../../../../shared/ui/input/input';
import { loginActions, loginReducer } from '../../model/slice/login-slice';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import Text, { TextTheme } from '../../../../shared/ui/text/text';
import { getLoginUsername } from '../../model/selectors/get-login-username/get-login-username';
import { getLoginPassword } from '../../model/selectors/get-login-password/get-login-password';
import { getLoginLoading } from '../../model/selectors/get-login-loading/get-login-loading';
import { getLoginError } from '../../model/selectors/get-login-error/get-login-error';
// eslint-disable-next-line max-len
import DynamicModuleLoader, { ReducersList } from '../../../../shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useAppDispatch } from '../../../../shared/lib/hooks/use-app-dispatch/use-app-dispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess: ()=> void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'rejected') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    type="text"
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
