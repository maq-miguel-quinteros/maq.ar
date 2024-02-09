import { Title } from "../atoms/Title";
import { Card } from "../molecules/Card";

export const CardList = ({ compData }) => {   

    return (
        <>  
            <Title 
                variant={compData.title.variant} 
                level={compData.title.level} 
                text={compData.title.text} />            
            {compData.cards.map((data) => {
                return (
                <Card compData={data} />)
            })}
        </>
    );
}