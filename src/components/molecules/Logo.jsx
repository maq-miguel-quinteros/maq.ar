import styled from "styled-components"

const StyledDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 576px) {
        flex-direction: column;
    }

`;

export const Logo = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}
