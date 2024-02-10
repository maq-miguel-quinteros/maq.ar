import styled, { css } from 'styled-components';

const AStyled = styled.a`
    margin-left: 3px;
    margin-right: 3px;
    ${(props) => props.$variant === 'facebook' && css`        
        color: #3b5998;
        &:hover {
            color: white;
            background-color: #5874af ;
        }
    `}
    ${(props) => props.$variant === 'instagram' && css`        
        color: #F58529;
        &:hover {
            color: white;
            background-color: #FEDA77 ;
        }
    `}
    ${(props) => props.$variant === 'twitter-x' && css`        
        color: #00acee;
        &:hover {
            color: white;
            background-color: #40bbea ;
        }
    `}
    ${(props) => props.$variant === 'navbar' && css`        
        color: var(--color-complement-4);
        background-color: var(--color-complement-1);
        font-size: x-large;
        margin: 5px;
        padding: 10px 20px;
        border-radius: 10px 0px 0px 10px;
        &:hover {
            transform: translateX(-15px);
            border-radius: 0px 10px 10px 0px;

        }
        &:focus {
            transform: translateX(-15px);
            border-radius: 0px 10px 10px 0px;
        }
    `}
`;

export const Anchor = ({ variant, href, text }) => {

    return (
        <>
            <AStyled $variant={variant} href={href}>{text}</AStyled>
        </>
    );
}