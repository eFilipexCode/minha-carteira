import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/Themes/Dark';
import RoutesApp from './routes';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <RoutesApp />
        </ThemeProvider>
    );
};

export default App;