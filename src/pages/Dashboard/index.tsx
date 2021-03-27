import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';

const Dashboard: React.FC = () => { // React.FC determina o tipo de Dashbord (Functional Component)
    return (
        <Container>
            <ContentHeader />
        </Container>
    );
};

export default Dashboard;