import { Title } from "../atoms/Title";
import { CardList } from "../organism/CardList";
Title

export const CardsPresentation = ({cd}) => {

    return (
        <>
            <Title 
                variant={cd.title.variant} 
                level={cd.title.level} 
                text={cd.title.text} />

            <CardList cd={cd.cardList} />
        </>
    );
}