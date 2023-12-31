import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/class-names/class-names';
import Button, { ButtonTheme } from '../../../shared/ui/button/button';

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Language')}
        </Button>
    );
};

export default LanguageSwitcher;
