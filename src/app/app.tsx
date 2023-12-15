import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/about-page';
import { MainPage } from '../pages/main-page';
import { Suspense } from 'react';
import { useTheme } from './providers/theme-provider/lib/useTheme';
import { classNames } from '../shared/lib/class-names/class-names';


const App = () => {
    
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>MAIN </Link>
            <Link to={'/about'}> ABOUT</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element = {<AboutPage/>}/>
                    <Route path={'/'} element = {<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;