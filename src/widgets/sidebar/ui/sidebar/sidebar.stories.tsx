import { StoryFn, Meta } from '@storybook/react';
import { themeDecorator } from '../../../../shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../../../app/providers/theme-provider';
import Sidebar from './sidebar';
import { routerDecorator } from '../../../../shared/config/storybook/router-decorator/router-decorator';

export default {
    title: 'widget/Sidebar',
    decorators: [routerDecorator],
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
