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
    }
`;

export const Nav = ({variant, children}) => {
    return (
        <StyledNav $variant={variant}>
            {children}
        </StyledNav>
    )
}
