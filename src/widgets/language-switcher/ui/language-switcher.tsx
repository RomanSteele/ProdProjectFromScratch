import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/class-names/class-names';
import cls from './language-switcher.module.scss';
import Button, { ThemeButton } from '../../../shared/ui/button/button';

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {


    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
            <Button 
                className={classNames(cls.languageSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR} 
                onClick={toggleLanguage}
            >
                {t('Language')}
            </Button>
    );

};

export default LanguageSwitcher;