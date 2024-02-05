import { t } from 'i18next';
import { memo } from 'react';
import AppLink, { AppLinkTheme } from '../../../../shared/ui/app-link/app-link';
import cls from './sidebar-item.module.scss';
import { SidebarItemType } from '../../model/items';
import { classNames } from '../../../../shared/lib/class-names/class-names';

interface sidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

const sidebarItem = memo(({ item, collapsed }: sidebarItemProps) => (
    <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>
            {t(item.text)}
        </span>
    </AppLink>
));

export default sidebarItem;
