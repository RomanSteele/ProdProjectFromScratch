import cls from '../ui/navbar.module.scss'
import { classNames } from '../../../shared/lib/class-names/class-names';
import AppLink, { AppLinkTheme } from '../../../shared/ui/app-link/app-link';
import { ThemeSwitcher } from '../../theme-switcher';


interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar,{},[className])}>
            <ThemeSwitcher />
            <div className = {cls.links}>
             <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                 MAIN 
             </AppLink>
             <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}> 
                ABOUT 
             </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
