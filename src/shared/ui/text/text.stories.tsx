import { Meta, StoryFn } from '@storybook/react';
import Text, { TextTheme } from './text';
import { themeDecorator } from '../../config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../../app/providers/theme-provider';
import { PrimaryDark } from '../app-link/app-link.storeis';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text',
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text',
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];
