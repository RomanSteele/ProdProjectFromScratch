import { Meta, StoryFn } from '@storybook/react';
import { themeDecorator } from '../../../shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../../app/providers/theme-provider';
import MainPage from './main-page';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = (args: Record<string, unknown>) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
