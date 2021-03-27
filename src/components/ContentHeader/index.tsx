import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>
            <Controllers>
                <button type="button">a</button>
                <button type="button">a</button>
            </Controllers>
        </Container>
    );
};

export default ContentHeader;