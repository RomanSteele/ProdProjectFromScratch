import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '../../../shared/lib/class-names/class-names';
// eslint-disable-next-line max-len
import DynamicModuleLoader, { ReducersList } from '../../../shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
    ProfileCard, fetchProfileData, getProfileData, getProfileError, getProfileLoading, profileReducer,
} from '../../../entities/profile';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch/use-app-dispatch';
import ProfilePageHeader from './profile-page-header/profile-page-header';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
