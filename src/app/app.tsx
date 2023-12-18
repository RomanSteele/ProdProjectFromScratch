import './styles/index.scss';
import { useTheme } from './providers/theme-provider/lib/use-theme';
import { classNames } from '../shared/lib/class-names/class-names';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/navbar';


const App = () => {
    
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
           <Navbar />
            <AppRouter />
        <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};

export default App;