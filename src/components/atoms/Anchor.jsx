import styled, {css} from 'styled-components';

const AStyled = styled.a `
    ${(props) => props.$variant === 'social' && css `
        text-decoration: none;
        margin-left: 2px;
        &:hover {
            color: white;
            background-color: blue;
        }
    `}
`;

export const Anchor = ({variant ,href, text}) => {

    return (
        <>
            <AStyled $variant={variant} href={href}>{text}</AStyled>
        </>
    );
}