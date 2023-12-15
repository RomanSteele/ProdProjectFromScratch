import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/about-page/about-page.async';
import { MainPageAsync } from './pages/main-page/main-page.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/class-names';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>MAIN </Link>
            <Link to={'/about'}> ABOUT</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element = {<AboutPageAsync/>}/>
                    <Route path={'/'} element = {<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;