import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

interface IListsProps {
    listType: "entradas" | "saídas";
};

const List: React.FC<IListsProps> = ({ listType }) => {
    return (
        <Container>
            <ContentHeader title={listType === 'entradas' ? "Entradas" : "Saídas"} lineColor="rgb(247, 147, 27)">
                <SelectInput options={[{ value: "december", label: "Dezembro" }]} />
                <SelectInput options={[{ value: 23, label: 23 }]} />
            </ContentHeader>
        </Container>
    );
};

export default List;