import styled, { css } from 'styled-components';

const TitleStyled = styled.div `
    ${(props) => props.$variant === 'pageTitle' && css`
        color: var(--color-primary-4);
    `}
    ${(props) => props.$variant === 'section' && css`
        color: var(--color-primary-3);
    `}
    ${(props) => props.$variant === 'article' && css`
        color: var(--color-primary);
    `}
`;

export const Title = ({variant, level, text}) => {

    return (
        
            <TitleStyled $variant={variant}>
            {level === 'h1' && <h1>{text}</h1>}
            {level === 'h2' && <h2>{text}</h2>}
            {level === 'h3' && <h3>{text}</h3>}
            {level === 'h4' && <h4>{text}</h4>}
            </TitleStyled>
        
    )
}