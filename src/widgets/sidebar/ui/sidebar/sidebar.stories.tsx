import { StoryFn, Meta } from '@storybook/react';
import { themeDecorator } from '../../../../shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../../../app/providers/theme-provider';
import Sidebar from './sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
