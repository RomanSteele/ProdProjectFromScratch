import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';
import { classNames } from '../../../shared/lib/class-names/class-names';
import Button, { ButtonTheme } from '../../../shared/ui/button/button';
import Modal from '../../../shared/ui/modal/modal';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onModalToggle = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                type="button"
                onClick={onModalToggle}
            >
                {t('Login')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onModalToggle}>{t('Login')}</Modal>
        </div>
    );
};

export default Navbar;
