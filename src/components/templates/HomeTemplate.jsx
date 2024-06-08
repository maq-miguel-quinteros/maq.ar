import { Section } from "../organisms/Section"
import { Article } from "../molecules/Article"
import { Title } from "../atoms/Title"

export const HomeTemplate = () => {
    return (
        <main>
            <Section>
                <Article>
                    <Title variant={'h2'}>Un título dentro de una sección</Title>
                </Article>
            </Section>
        </main>
    )
}
