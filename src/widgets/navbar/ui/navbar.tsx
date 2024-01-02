/* eslint-disable i18next/no-literal-string */
import cls from './navbar.module.scss';
import { classNames } from '../../../shared/lib/class-names/class-names';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            /
        </div>
    </div>
);

export default Navbar;
