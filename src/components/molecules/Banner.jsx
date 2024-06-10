import styled from "styled-components"

const StyledDiv = styled.div`
    
`;

export const Banner = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}
