import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: #36383e;
    color: antiquewhite;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Header = ({variant, children}) => {
    return (
        <StyledHeader $variant={variant}>
            {children}
        </StyledHeader>
    )
}
