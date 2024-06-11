import styled, {css} from "styled-components"

const StyledFooter = styled.footer`
    ${(props) => props.$variant === 'footer' && css`
        background-color: #36383e;
        color: antiquewhite;
        display:flex;
        justify-content: center;
        align-items: center;
    `}
`;

export const Footer = ({variant, children}) => {
    return (
        <StyledFooter $variant={variant}>
            {children}
        </StyledFooter>
    )
}
