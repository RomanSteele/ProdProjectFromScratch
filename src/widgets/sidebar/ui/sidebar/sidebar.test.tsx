import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Sidebar from './sidebar';
import { renderWithTranslation } from '../../../../shared/lib/tests/render-with-translation/render-with-translation';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
