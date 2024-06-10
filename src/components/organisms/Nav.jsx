import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: end;
`;

export const Nav = ({variant, children}) => {
    return (
        <StyledNav $variant={variant}>
            {children}
        </StyledNav>
    )
}
