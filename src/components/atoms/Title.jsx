import styled, {css} from "styled-components"

const StyledH1 = styled.h1 `    
    ${(props) => props.$variant === 'header' && css`
        font-family: monospace;
        margin-left: 10%;
    `}
`;

export const Title = ({level, variant, children}) => {
    return (
        <>
            {level === 'h1' && 
                <StyledH1 $variant={variant}>{children}</StyledH1>}

            {(!level || level === 'h2') && 
                <h2 $variant={variant}>{children}</h2>}

            {level === 'h3' && 
                <h3 $variant={variant}>{children}</h3>}

            {level === 'h4' && 
                <h4 $variant={variant}>{children}</h4>}
        </>
    )
}
