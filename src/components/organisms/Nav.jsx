import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    font-size:x-small;
    margin-top:-10px;
    margin-bottom:-10px;
    z-index:1;

    @media (min-width: 576px) {
        background-color: #36383e;
        justify-content: end;
    }
    @media (min-width: 1200px){
        display: none;
    }
`;

export const Nav = ({variant, children}) => {
    return (
        <StyledNav $variant={variant}>
            {children}
        </StyledNav>
    )
}
