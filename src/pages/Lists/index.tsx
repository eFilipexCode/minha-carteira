import React from 'react';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

interface IListsProps {
    listType: "entradas" | "saídas";
};

const List: React.FC<IListsProps> = ({ listType }) => {
    const months = [
        { value: 1, label: "Janeiro" },
        { value: 2, label: "Fevereiro" },
        { value: 3, label: "Março" },
        { value: 4, label: "Abril" },
        { value: 5, label: "Maio" },
        { value: 6, label: "Junho" },
        { value: 7, label: "Julho" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Setembro" },
        { value: 10, label: "Outubro" },
        { value: 11, label: "Novembro" },
        { value: 12, label: "Dezembro" },
    ];

    const years = [
        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 },
    ];

    return (
        <Container>
            <ContentHeader title={listType === 'entradas' ? "Entradas" : "Saídas"} lineColor="rgb(247, 147, 27)">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
                <HistoryFinanceCard tagColor="#E44c4e" title="Conta de luz" subTitle="27/07/2020" amount="R$ 130,00" />
            </Content>
        </Container>
    );
};

export default List;