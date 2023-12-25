import { Meta, StoryFn } from '@storybook/react';
import { themeDecorator } from '../../../shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../../app/providers/theme-provider';
import AboutPage from './about-page';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = (args: Record<string, unknown>) => <AboutPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
