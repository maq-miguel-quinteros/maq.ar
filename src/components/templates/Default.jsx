import styled from 'styled-components';

import { NavBar } from "../molecules/NavBar";
import { Header } from "../organism/Header";
import { Footer } from '../molecules/Footer';

const DefaultStyled = styled.div`
    background-color: var(--color-primary-1);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DivStyled = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Default = ({compData, children}) => {
    
    return (
        <DefaultStyled>
            <Header compData={compData.header} />
            <DivStyled>
                {children}
                <NavBar compData={compData.navbar} />
            </DivStyled>
            <Footer />
        </DefaultStyled>
    );
}