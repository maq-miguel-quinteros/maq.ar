import styled from 'styled-components';

const FooterStyled = styled.footer `
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: red;
    width: 100%;
    height: 10vh;
    
/*     position: fixed;
    bottom: 0; */
`;

export const Footer = ({cd}) => {
    return (
        <FooterStyled>
            <span>maq.ar © Miguel Ángel Quinteros</span>
        </FooterStyled>
    )
}
