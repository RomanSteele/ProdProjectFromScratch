import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';
import { classNames } from '../../../shared/lib/class-names/class-names';
import Button, { ButtonTheme } from '../../../shared/ui/button/button';
import { LoginModal } from '../../../features/auth-by-username';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onModalClose = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                type="button"
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onModalClose}
            />
        </div>
    );
};

export default Navbar;
