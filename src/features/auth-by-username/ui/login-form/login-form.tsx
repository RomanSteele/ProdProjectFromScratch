import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './login-form.module.scss';
import Button from '../../../../shared/ui/button/button';
import Input from '../../../../shared/ui/input/input';

interface LoginFormProps {
    className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                placeholder={t('Username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Password')}
            />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};

export default LoginForm;
