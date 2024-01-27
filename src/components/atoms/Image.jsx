import styled, {css} from 'styled-components';

const ImgStyled = styled.img `
    ${(props) => props.$variant === 'logo' && css `
        border-radius: 50%;
        width: 100px;`}
`;

export const Image = ({variant, src, alt}) => {

    return (
        <ImgStyled $variant={variant} src={src} alt={alt} />
    );
}