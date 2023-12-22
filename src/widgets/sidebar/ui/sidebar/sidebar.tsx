/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './sidebar.module.scss';
import { ThemeSwitcher } from '../../../theme-switcher';
import { LanguageSwitcher } from '../../../language-switcher';
import Button from '../../../../shared/ui/button/button';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.language} />
            </div>
        </div>
    );
};

export default Sidebar;
