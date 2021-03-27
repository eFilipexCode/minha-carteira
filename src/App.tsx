import React from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/Themes/Dark';
// import Dashboard from './pages/Dashboard';
import List from './pages/Lists';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                {/* <Dashboard /> */}
                <List listType="saídas"/>
            </Layout>
        </ThemeProvider>
    );
};

export default App;