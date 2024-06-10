import styled, {css} from "styled-components"

const StyledDiv = styled.div`
    ${(props) => props.$variant === 'aside' && css`
        font-size: small;        
    `}
`;

export const Card = ({variant, children}) => {
    return (
        <StyledDiv $variant={variant}>
            {children}
        </StyledDiv>
    )
}
