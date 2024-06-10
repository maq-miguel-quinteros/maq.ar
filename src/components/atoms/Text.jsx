import styled, {css} from "styled-components"

const StyledP = styled.p`
    ${(props) => props.$variant === 'aside' && css`
        margin:0;
    `}
`;

const StyledSpan = styled.span `

`;

export const Text = ({type, variant, children}) => {
    return (
        <>
            {(!type || type === 'p') && 
                <StyledP $variant={variant}>{children}</StyledP>}

            {type === 'span' && 
                <span $variant={variant}>{children}</span>}
        </>
    )
}
