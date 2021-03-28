import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.color.primary}; 
    color: ${props => props.theme.color.white};
    padding: 25px;
    height: calc(100vh - 70px);
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.color.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.color.tertiary};
        border-radius: 10px;
    }
`;