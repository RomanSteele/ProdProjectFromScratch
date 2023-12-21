import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/class-names/class-names';
import cls from './not-found-page.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};

export default NotFoundPage;
