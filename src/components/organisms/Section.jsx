import styled from "styled-components"

const StyledSection = styled.section`
    @media (min-width: 1200px){
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const Section = ({variant, children}) => {
    return (
    <StyledSection $variant={variant}>
        {children}
    </StyledSection>
    )
}
