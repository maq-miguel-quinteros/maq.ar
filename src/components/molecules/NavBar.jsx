import styled from 'styled-components';

import { Anchor } from "../atoms/Anchor";

/* const DivStyled = styled.div`
    width: 25%;
    display: flex;
    justify-content: flex-end;
`; */

const NavStyled = styled.nav`    
    display: flex;
    flex-direction: column;    
`;

export const NavBar = ({ cd }) => {

    return (
        /* <DivStyled> */
        <NavStyled>
            {cd.map((data) => {
                return (
                    <Anchor
                        key={data.text}
                        href={data.href}
                        text={data.text}
                        variant={data.variant} />
                )
            }
            )}
        </NavStyled>
        /* </DivStyled> */

    );
}