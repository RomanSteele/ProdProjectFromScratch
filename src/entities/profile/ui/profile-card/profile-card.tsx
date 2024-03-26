import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './profile-card.module.scss';
import Button, { ButtonTheme } from '../../../../shared/ui/button/button';
import Input from '../../../../shared/ui/input/input';
import Text, { TextAlign, TextTheme } from '../../../../shared/ui/text/text';
import { Profile } from '../../model/types/profile';
import Loader from '../../../../shared/ui/loader/loader';

interface profileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard = (props: profileCardProps) => {
    const {
        className, data, isLoading, error,
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, { }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occured')}
                    text={t('Please try to reload this page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('Your firstname')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
