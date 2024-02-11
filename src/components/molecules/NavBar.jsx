import styled from 'styled-components';

import { Anchor } from "../atoms/Anchor";

const NavStyled = styled.nav`    
    display: flex;
    flex-direction: column;    
`;

export const NavBar = ({ compData }) => {

    return (
        <NavStyled>
            {compData && compData.map((data) => {
                return (
                    <Anchor
                        key={data.key}
                        href={data.href}
                        text={data.text}
                        variant={data.variant} />
                )
            })}
        </NavStyled>
    );
}