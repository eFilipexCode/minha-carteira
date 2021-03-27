import React from 'react';
import { Container, Header, LogoImg, Title,MenuContainer, MenuItemLink } from './styles';
import logo from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logo} alt="Logo Minha Carteira"></LogoImg>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard size={25} />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowUpward size={25} />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowDownward size={25} />
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp size={25} />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
};

export default Aside;