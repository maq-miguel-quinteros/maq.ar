import styled, {css} from "styled-components"

const StyledFigure = styled.figure `
    
    ${(props) => props.$variant === 'header' && css`
        max-width: 100px;
    `}
`;

const StyledImg = styled.img `
    width: 100%;
`;

export const Image = ({src, alt, variant, children}) => {
    return (
        <StyledFigure $variant={variant}>
            <StyledImg src={src} alt={alt} />
            {children && 
                <figcaption>{children}</figcaption>}
        </StyledFigure>
    )
}
