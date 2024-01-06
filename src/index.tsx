import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { ThemeProvider } from './app/providers/theme-provider';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/error-boundary';
import { StoreProvider } from './app/providers/store-provider';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
