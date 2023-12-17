import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPage } from '../../../../pages/about-page';
import { MainPage } from '../../../../pages/main-page';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                   {Object.values(routeConfig).map(({element, path}) =>
                   <Route
                    key={path} 
                    path={path}
                    element={element} 
                    />
                   )}
                </Routes>
            </Suspense>
    );
}

export default AppRouter;