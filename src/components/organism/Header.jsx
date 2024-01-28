import styled from 'styled-components';

import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";
import { SocialContact } from "../molecules/SocialContact";
import { useState } from 'react';

const HeaderStyled = styled.header `
    display: flex;
    justify-content: space-between;
`;

const DivStyled = styled.div `
    display: flex;
    align-items: center;
`;

export const Header = ({cd = {}}) => {
    const [data, setData] = useState(cd)
    return (
        <HeaderStyled>
            <DivStyled>
                {data &&
                <Image 
                variant={cd.profileImage.variant} 
                src={cd.profileImage.src} 
                alt={cd.profileImage.alt}></Image>
                <Title                 
                level={cd.pageTitle.level} 
                text={cd.pageTitle.text} />
                }
                
            </DivStyled>
            <SocialContact  />
        </HeaderStyled>
    );
}