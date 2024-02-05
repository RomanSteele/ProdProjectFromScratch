/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
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
    disabled?: boolean;
    children?: ReactNode;
}

const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;
