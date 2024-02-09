import styled, { css } from 'styled-components';

const H1Styled = styled.h1 `
    font-size: xx-large;    
    font-weight: 900;
    ${(props) => props.$variant === 'pageTitle' && css`
        
    `}
`;

export const Title = ({variant, level, text}) => {

    return (
        <>
            {level === 'h1' && <H1Styled $variant={variant}>{text}</H1Styled>}
            {level === 'h2' && <h2>{text}</h2>}
            {level === 'h3' && <h3>{text}</h3>}
            {level === 'h4' && <h4>{text}</h4>}
        </>
    )
}