import styled, {css} from "styled-components"

const StyledArticle = styled.article`
    border-radius: 25px;
    padding: 4%;
    margin:1% 0;
    ${(props) => props.$variant === 'summary' && css`
        background-color: red;
    `}

    ${(props) => props.$variant === 'experience' && css`
        background-color: green;
    `}

    ${(props) => props.$variant === 'reference' && css`
        background-color: blue;
    `}
`;

export const Article = ({variant, children}) => {
    return (
        <StyledArticle $variant={variant}>
            {children}
        </StyledArticle>
    )
}
