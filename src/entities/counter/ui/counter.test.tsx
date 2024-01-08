import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from '../../../shared/lib/tests/component-render/component-render';
import Counter from './counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 0 } },
        });

        await userEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 0 } },
        });

        await userEvent.click(screen.getByTestId('decrement-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
    });
});
