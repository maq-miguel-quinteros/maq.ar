import styled from "styled-components";

import { Anchor } from "../atoms/Anchor";
import { Icon } from "../atoms/Icon";

const DivStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const SocialContact = ({ compData }) => {

    return (
        <DivStyled>
            {compData.map((data) => {
                return (
                    <DivStyled key={data.href}>
                        <Icon
                            variant={data.text} 
                            type={data.iconType} />
                        <Anchor
                            href={data.href}
                            text={data.text}
                            variant={data.text}
                        />
                    </DivStyled>
                );
            })}
        </DivStyled>
    );
};
