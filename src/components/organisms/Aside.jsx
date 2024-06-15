import styled from "styled-components"

const StyledAside = styled.aside`
    
    padding-left: 2%;
    padding-right: 2%;
    margin:0;
    background-color: grey;
    color: white;
    padding-bottom:15px;
`;

export const Aside = ({variant, children}) => {
    return (
        <StyledAside $variant={variant}>
            {children}
        </StyledAside>
    )
}
