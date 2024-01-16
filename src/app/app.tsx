import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from './providers/theme-provider/lib/use-theme';
import { classNames } from '../shared/lib/class-names/class-names';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/navbar';
import { Sidebar } from '../widgets/sidebar';
import { userActions } from '../entities/user/model/slice/user-slice';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
