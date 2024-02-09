
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import styled, { css } from 'styled-components'

const SpanStyled = styled.span`
    ${(props) => props.$variant === 'facebook' && css`        
        color: #3b5998;

    `}
    ${(props) => props.$variant === 'instagram' && css`        
        color: #F58529;

    `}
    ${(props) => props.$variant === 'twitter-x' && css`        
        color: #00acee;

    `}
`;

export const Icon = ({ variant, type }) => {

    return (
        <>
            <SpanStyled $variant={variant}>
                {type === 'facebook' && <FaFacebookSquare />}
                {type === 'instagram' && <FaInstagramSquare />}
                {type === 'twitter-x' && <FaSquareXTwitter />}
            </SpanStyled>
        </>
    );
}