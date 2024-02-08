import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { classNames } from '../../../shared/lib/class-names/class-names';
// eslint-disable-next-line max-len
import DynamicModuleLoader, { ReducersList } from '../../../shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { ProfileCard, fetchProfileData, profileReducer } from '../../../entities/profile';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch/use-app-dispatch';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
