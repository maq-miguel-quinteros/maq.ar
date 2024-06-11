import styled from "styled-components"

import { Header } from "../organisms/Header"
import { Nav } from "../organisms/Nav"
import { Aside } from "../organisms/Aside"
import { Footer } from "../organisms/Footer"

import { Card } from "../molecules/Card"

import { Title } from "../atoms/Title"
import { Text } from "../atoms/Text"
import { Image } from "../atoms/Image"
import { Anchor } from "../atoms/Anchor"

import profile from "../../assets/profile.png"

const StyledDiv = styled.div`
    height: 100dvh;
    display: flex;
    flex-direction: column;    
`;

// eslint-disable-next-line react/prop-types
export const Default = ({children}) => {
    return (
        <StyledDiv>            
            <Header>
                <Image src={profile} variant={'header'} alt={'header image'}></Image>
                <Title level={'h1'} variant={'header'}>Miguel Ángel Quinteros</Title>
            </Header>

            <Nav>
                <Anchor href={'#'} variant={'nav'}>Summary</Anchor>
                <Anchor href={'#'} variant={'nav'}>Work Experience</Anchor>
                <Anchor href={'#'} variant={'nav'}>Reference</Anchor>
            </Nav>

            <Aside>
                <Card variant={'aside'}>
                    <Title level={'h3'} variant={'aside'}>Contact details</Title>
                    <Text variant={'aside'}>email@email.com</Text>
                    <Text variant={'aside'}>381 5 355225</Text>
                    <Text variant={'aside'}>Av. Francisco de Aguirre 140, CP4000</Text>
                </Card>
                <Card variant={'aside'}>
                    <Title level={'h3'} variant={'aside'}>Education</Title>
                    <Text variant={'aside'}>Ingeniería en Sistemas</Text>
                    <Text variant={'aside'}>Profesorado de Historia</Text>
                    <Text variant={'aside'}>Licenciatura en Tecnología Educativa</Text>
                </Card>
                <Card variant={'aside'}>
                    <Title level={'h3'} variant={'aside'}>Skills</Title>
                    <Text variant={'aside'}>Ingles intermedio</Text>
                    <Text variant={'aside'}>Programación JAVA, React</Text>
                </Card>
            </Aside>

            {children}

            <Footer variant={'footer'}>
                <Text>maq.miguel.quinteros</Text>
            </Footer>
        </StyledDiv>
    )
}
