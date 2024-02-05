import { memo, useMemo, useState } from 'react';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './sidebar.module.scss';
import { ThemeSwitcher } from '../../../theme-switcher';
import { LanguageSwitcher } from '../../../language-switcher';
import Button, { ButtonSize, ButtonTheme } from '../../../../shared/ui/button/button';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../sidebar-item/sidebar-item';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    short={collapsed}
                    className={cls.language}
                />
            </div>
        </div>
    );
});

export default Sidebar;
