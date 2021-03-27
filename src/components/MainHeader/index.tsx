import React, { useMemo } from 'react';
import { Container, Profile, Welcome, Username } from './styles';
import { emojisCode } from '../../utils/emojis';
import Toggle from '../Toggle';

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojisCode.length);
        return emojisCode[index];
    }, []);

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Emmanue Filipe</Username>
            </Profile>
        </Container>
    );
};

export default MainHeader;