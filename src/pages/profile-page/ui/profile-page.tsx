import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/class-names/class-names';
// eslint-disable-next-line max-len
import DynamicModuleLoader, { ReducersList } from '../../../shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { profileReducer } from '../../../entities/profile';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('main');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
