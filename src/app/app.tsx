import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from './providers/theme-provider/lib/use-theme';
import { classNames } from '../shared/lib/class-names/class-names';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/navbar';
import { Sidebar } from '../widgets/sidebar';

const App = () => {
    const { theme } = useTheme();

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
