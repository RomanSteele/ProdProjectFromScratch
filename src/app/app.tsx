import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/theme-provider/lib/useTheme';
import { classNames } from '../shared/lib/class-names/class-names';
import { AppRouter } from './providers/router';


const App = () => {
    
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>MAIN </Link>
            <Link to={'/about'}> ABOUT</Link>
            <AppRouter />
        </div>
    );
};

export default App;