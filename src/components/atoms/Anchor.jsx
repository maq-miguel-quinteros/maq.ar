import styled, {css} from "styled-components"

const StyledA = styled.a`
    text-decoration: none;
    
    ${(props) => props.$variant === 'nav' && css`
        background-color: midnightblue;
        color: antiquewhite;
        border: 1px solid antiquewhite;
        border-radius: 10px;
        display: inline-block;
        width: 90px;
        padding: 5px;
        margin: 1px;
        text-align: center;
    `}
`;

export const Anchor = ({href, variant, children}) => {
    return (
        <StyledA href={href} $variant={variant}>
            {children}
        </StyledA>
    )
}