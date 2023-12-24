import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/style-decorator/style-decorator';
import { themeDecorator } from '../../src/shared/config/storybook/style-decorator/theme-decorator';
import { routerDecorator } from '../../src/shared/config/storybook/router-decorator/router-decorator';
import { Theme } from '../../src/app/providers/theme-provider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.DARK));
addDecorator(routerDecorator);
