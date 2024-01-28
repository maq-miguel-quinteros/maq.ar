import styled from 'styled-components';

import { Anchor } from "../atoms/Anchor";
import { Icon } from "../atoms/Icon";

const DivStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const SocialContact = ({cd}) => {

    return (
        <DivStyled>
            <DivStyled>
                <Icon type={'facebook'} />
                <Anchor 
                    href={'https://www.facebook.com/maq.miguel.quinteros'}
                    text={'facebook'} variant={'social'} />
            </DivStyled>
        </DivStyled>
    );
}