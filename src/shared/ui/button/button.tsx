/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../../shared/lib/class-names/class-names';
import cls from './button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?:ButtonTheme;
    square?:boolean;
    size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
