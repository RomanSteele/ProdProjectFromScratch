import { Meta, StoryFn } from '@storybook/react';
import { themeDecorator } from '../../../shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../../app/providers/theme-provider';
import ProfilePage from './profile-page';
import { StoreDecorator } from '../../../shared/config/storybook/store-decorator/store-decorator';
import { routerDecorator } from '../../../shared/config/storybook/router-decorator/router-decorator';

export default {
    title: 'pages/ProfilePage',
    decorators: [routerDecorator],
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), StoreDecorator({})];
