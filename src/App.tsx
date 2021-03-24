import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Dashboard />
        </React.Fragment>
    );
};

export default App;