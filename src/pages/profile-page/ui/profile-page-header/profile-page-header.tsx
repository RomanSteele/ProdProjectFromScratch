import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './profile-page-header.module.scss';
import Button, { ButtonTheme } from '../../../../shared/ui/button/button';
import Text from '../../../../shared/ui/text/text';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Edit')}
            </Button>
        </div>
    );
};

export default ProfilePageHeader;
