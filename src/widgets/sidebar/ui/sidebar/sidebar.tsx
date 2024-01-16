import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import cls from './sidebar.module.scss';
import { ThemeSwitcher } from '../../../theme-switcher';
import { LanguageSwitcher } from '../../../language-switcher';
import Button, { ButtonSize, ButtonTheme } from '../../../../shared/ui/button/button';
import AppLink, { AppLinkTheme } from '../../../../shared/ui/app-link/app-link';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';
import AboutIcon from '../../../../shared/assets/icons/about-20-20.svg';
import MainIcon from '../../../../shared/assets/icons/main-20-20.svg';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

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
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('MAIN')}
                    </span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('ABOUT')}
                    </span>
                </AppLink>

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
};

export default Sidebar;
