import styled, {css} from 'styled-components';

const AStyled = styled.a `
    margin-left: 3px;
    margin-right: 3px;
    ${(props) => props.$variant === 'facebook' && css `        
        color: #3b5998;
        &:hover {
            color: white;
            background-color: #5874af ;
        }
    `}
    ${(props) => props.$variant === 'instagram' && css `        
        color: #F58529;
        &:hover {
            color: white;
            background-color: #FEDA77 ;
        }
    `}
    ${(props) => props.$variant === 'twitter-x' && css `        
        color: #00acee;
        &:hover {
            color: white;
            background-color: #40bbea ;
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