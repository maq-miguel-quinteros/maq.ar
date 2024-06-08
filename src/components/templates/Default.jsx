import { Header } from "../organisms/Header"
import { Footer } from "../organisms/Footer"

import { Title } from "../atoms/Title"
import { Text } from "../atoms/Text"

export const Default = ({children}) => {
    return (
        <div>
            <Header>
                <Title level={'h1'}>Primer título de página</Title>
            </Header>
            {children}
            <Footer>
                <Text>Lorem cortito</Text>
            </Footer>
        </div>
    )
}
