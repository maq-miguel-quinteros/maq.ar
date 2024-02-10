import styled from 'styled-components';

import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";
import { SocialContact } from "../molecules/SocialContact";

const HeaderStyled = styled.header `
    display: flex;
    justify-content: space-between;
    background-color: var(--color-primary-2);
`;

const DivStyled = styled.div `
    display: flex;
    align-items: center;
`;

export const Header = ({ compData }) => {   
    return (
        <HeaderStyled>
            <DivStyled>
                
                <Image 
                variant={compData.profileImage.variant} 
                src={compData.profileImage.src} 
                alt={compData.profileImage.alt}></Image>
                <Title                 
                level={compData.pageTitle.level} 
                text={compData.pageTitle.text}
                variant={compData.pageTitle.variant} />                
                
            </DivStyled>
            <SocialContact compData={compData.socialContact} />
        </HeaderStyled>
    );
}