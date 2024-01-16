import { styleDecorator } from '../../src/shared/config/storybook/style-decorator/style-decorator';
import { themeDecorator } from '../../src/shared/config/storybook/theme-decorator/theme-decorator';
import { routerDecorator } from '../../src/shared/config/storybook/router-decorator/router-decorator';
import { translationDecorator } from '../../src/shared/config/storybook/translation-decorator/translation-decorator';
import { Theme } from '../../src/app/providers/theme-provider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    decorators: [styleDecorator, themeDecorator(Theme.LIGHT), routerDecorator, translationDecorator],
};
