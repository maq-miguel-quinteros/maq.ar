import { Title } from "../atoms/Title";
import { Card } from "../molecules/Card";

export const CardList = ({cd}) => {

    return (
        <>  
            <Title 
                variant={cd.title.variant} 
                level={cd.title.level} 
                text={cd.title.text} />
            
            {cd.map((data) => {
                <Card cd={data} />
            })}
        </>
    );
}