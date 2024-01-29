import styled from "styled-components";

import { Anchor } from "../atoms/Anchor";
import { Icon } from "../atoms/Icon";

const DivStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const SocialContact = ({ cd }) => {

    return (
        <DivStyled>
            {cd.map((data) => {
                return (
                    <DivStyled key={data.href}>
                        <Icon
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
