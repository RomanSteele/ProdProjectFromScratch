/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../../shared/lib/class-names/class-names';
import cls from './button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?:ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
