import styled from 'styled-components';

interface ITagProps {
    color: string;
};

export const Container = styled.li`
    background: ${props => props.theme.color.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    &:hover {
        opacity: .7;   
        transform: translateX(10px);
    }

    > div.historyCard-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
    }
`;

export const Tag = styled.div<ITagProps>`
    background: ${props => props.color};
    position: absolute;
    width: 10px;
    height: 60%;
`;