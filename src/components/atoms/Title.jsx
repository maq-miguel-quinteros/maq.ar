

export const Title = ({level, text}) => {

    const TitleStyled = styled.h1 `
        ${props => props.$variant === 'prueba' && css `
            color: green;
        `}
    `;

    return (
        <>
            {level === 'h1' && <TitleStyled>{text}</TitleStyled>}
            {level === 'h2' && <h1>{text}</h1>}
            {level === 'h3' && <h1>{text}</h1>}
        </>
    )
}