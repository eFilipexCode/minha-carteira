import React, { useMemo } from 'react';
import { Container, Profile, Welcome, Username } from './styles';
import { emojisCode } from '../../utils/emojis';

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojisCode.length);
        return emojisCode[index];
    }, []);

    return (
        <Container>
            <h1>Toggle Menu here </h1>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Emmanue Filipe</Username>
            </Profile>
        </Container>
    );
};

export default MainHeader;