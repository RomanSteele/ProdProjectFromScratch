import { StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (story: () => StoryObj) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
