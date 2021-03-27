import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => { // React.FC determina o tipo de Dashbord (Functional Component)
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="rgb(247, 147, 27)">
                <SelectInput options={[{ value: "december", label: "Dezembro" }]} />
                <SelectInput options={[{ value: 23, label: 23 }]} />
            </ContentHeader>

        </Container>
    );
};

export default Dashboard;