import { Title } from "../atoms/Title";
import { Card } from "../molecules/Card";

export const CardList = ({cd}) => {
    console.log(cd.cards);

    return (
        <>  
            <Title 
                variant={cd.title.variant} 
                level={cd.title.level} 
                text={cd.title.text} />            
            {cd.cards.map((data) => {
                return (
                <Card cd={data} />)
            })}
        </>
    );
}