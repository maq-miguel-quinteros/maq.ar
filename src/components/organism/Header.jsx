import styled from 'styled-components';

import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";
import { SocialContact } from "../molecules/SocialContact";

const HeaderStyled = styled.header `
    display: flex;
    justify-content: space-between;
`;

const DivStyled = styled.div `
    display: flex;
    align-items: center;
`;

export const Header = ({cd = {}}) => {   
    return (
        <HeaderStyled>
            <DivStyled>
                
                <Image 
                variant={cd.profileImage.variant} 
                src={cd.profileImage.src} 
                alt={cd.profileImage.alt}></Image>
                <Title                 
                level={cd.pageTitle.level} 
                text={cd.pageTitle.text} />
                
                
            </DivStyled>
            <SocialContact cd={cd.socialContact} />
        </HeaderStyled>
    );
}