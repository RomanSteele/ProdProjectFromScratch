import { StoryFn, Meta } from '@storybook/react';
import { themeDecorator } from '../../../shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from '../../../app/providers/theme-provider';
import Modal from '../modal/modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Login',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Login',
};
Dark.decorators = [themeDecorator(Theme.DARK)];
