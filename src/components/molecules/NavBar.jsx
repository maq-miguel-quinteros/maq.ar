import styled from 'styled-components';

import { Anchor } from "../atoms/Anchor";

const NavStyled = styled.nav`    
    display: flex;
    flex-direction: column;    
`;

export const NavBar = ({ cd }) => {

    return (
        <NavStyled>
            {cd && cd.map((data) => {
                return (
                    <Anchor
                        key={data.text}
                        href={data.href}
                        text={data.text}
                        variant={data.variant} />)
            })}
        </NavStyled>
    );
}