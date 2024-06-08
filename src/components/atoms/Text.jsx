import styled from "styled-components"

const StyledP = styled.p `

`;

const StyledSpan = styled.span `

`;

export const Text = ({type, variant, children}) => {
    return (
        <>
            {(!type || type === 'p') && 
                <p $variant={variant}>{children}</p>}

            {type === 'span' && 
                <span $variant={variant}>{children}</span>}
        </>
    )
}
