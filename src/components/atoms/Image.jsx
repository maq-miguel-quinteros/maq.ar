import styled, {css} from 'styled-components';

const ImgStyled = styled.img `
    ${(props) => props.$variant === 'logo' && css `
        border: 5px solid var(--color-primary);
        border-radius: 50%;
        width: 100px;
        margin: 10px`}
`;

export const Image = ({variant, src, alt}) => {

    return (
        <ImgStyled $variant={variant} src={src} alt={alt} />
    );
}