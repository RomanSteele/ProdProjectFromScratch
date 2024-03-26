import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../../shared/lib/class-names/class-names';
import cls from './app-link.module.scss';

export enum AppLinkTheme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    childern?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.applink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
