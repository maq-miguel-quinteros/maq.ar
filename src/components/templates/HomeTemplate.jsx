import { Section } from "../organisms/Section"
import { Article } from "../molecules/Article"
import { Title } from "../atoms/Title"

import styled from "styled-components"

const StyledMain = styled.main`
    
`;

export const HomeTemplate = () => {
    return (
        <StyledMain>
            <Section>
                <Article>
                    <Title variant={'h2'}>Un título dentro de una sección</Title>
                </Article>
            </Section>
        </StyledMain>
    )
}
