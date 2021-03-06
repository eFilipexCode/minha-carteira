import React from 'react';
import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[];
};

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => { // <ISelectInputProps> passa a interface para a funcao
    return (
        <Container>
            <select>
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </Container>
    );
};

export default SelectInput;