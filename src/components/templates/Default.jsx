import styled from 'styled-components';

import { NavBar } from "../molecules/NavBar";
import { Header } from "../organism/Header";
import { Footer } from '../molecules/Footer';

const DefaultStyled = styled.div`
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

export const Default = ({cd, children}) => {
    
    return (
        <DefaultStyled>
            <Header cd={cd.header} />
            <DivStyled>
                {children}
                <NavBar cd={cd.navbar} />
            </DivStyled>
            <Footer />
        </DefaultStyled>
    );
}