import { classNames } from '../../../../shared/lib/class-names/class-names'; 
import cls from './sidebar.module.scss';
import { useState } from "react";
import { ThemeSwitcher } from '../../../theme-switcher';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
