/* eslint-disable no-restricted-globals */
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/class-names/class-names';
import cls from './page-error.module.scss';
import Button from '../../../shared/ui/button/button';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button onClick={reloadPage}>
                {t('Update page')}
            </Button>
        </div>
    );
};

export default PageError;
