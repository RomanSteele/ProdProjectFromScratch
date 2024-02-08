import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './profile-card.module.scss';
import { getProfileData } from '../../model/selectors/get-profile-data/get-profile-data';
import { getProfileLoading } from '../../model/selectors/get-profile-loading/get-profile-loading';
import { getProfileError } from '../../model/selectors/get-profile-error/get-profile-error';
import Button, { ButtonTheme } from '../../../../shared/ui/button/button';
import Input from '../../../../shared/ui/input/input';
import Text from '../../../../shared/ui/text/text';

interface profileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: profileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Edit')}
                </Button>
            </div>
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
