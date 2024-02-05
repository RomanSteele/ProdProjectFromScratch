import { memo } from 'react';
import { classNames } from '../../../shared/lib/class-names/class-names';
import { useTheme, Theme } from '../../../app/providers/theme-provider';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';
import Button, { ButtonTheme } from '../../../shared/ui/button/button';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});

export default ThemeSwitcher;
