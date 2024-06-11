import { Section } from "../organisms/Section"

import { Article } from "../molecules/Article"

import { Title } from "../atoms/Title"
import { Text } from "../atoms/Text"

import styled from "styled-components"

const StyledMain = styled.main`
    
`;

export const HomeTemplate = () => {
    return (
        <StyledMain>
            <Section>
                <Article variant={'summary'}>
                    <Title variant={'h2'}>Summary</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est commodi tenetur, totam adipisci blanditiis ipsa, neque ullam saepe maxime eos ducimus nesciunt cupiditate dignissimos, dolorem non? Aliquam sint quam doloribus!</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa debitis laboriosam natus velit eos praesentium quae voluptatem! Corporis nostrum, doloremque quibusdam deleniti veniam odit cupiditate accusantium eos eum quo?</Text>
                </Article>
                <Article variant={'experience'}>
                    <Title variant={'h2'}>Work experience</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est commodi tenetur, totam adipisci blanditiis ipsa, neque ullam saepe maxime eos ducimus nesciunt cupiditate dignissimos, dolorem non? Aliquam sint quam doloribus!</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa debitis laboriosam natus velit eos praesentium quae voluptatem! Corporis nostrum, doloremque quibusdam deleniti veniam odit cupiditate accusantium eos eum quo?</Text>
                </Article>
                <Article variant={'reference'}>
                    <Title variant={'h2'}>Reference</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est commodi tenetur, totam adipisci blanditiis ipsa, neque ullam saepe maxime eos ducimus nesciunt cupiditate dignissimos, dolorem non? Aliquam sint quam doloribus!</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa debitis laboriosam natus velit eos praesentium quae voluptatem! Corporis nostrum, doloremque quibusdam deleniti veniam odit cupiditate accusantium eos eum quo?</Text>
                </Article>
            </Section>
        </StyledMain>
    )
}
