import { Title } from "../atoms/Title";
import { CardList } from "../organism/CardList";

export const CardsPresentation = ({ compData }) => {
    
    return (
        <>
            {compData && compData.map((data) => {                
                return (
                    <div key={data.key}>
                        <Title
                        variant={data.title.variant}
                        level={data.title.level} 
                        text={data.title.text} />

                        {data.cardList && data.cardList.map((dataCardList) => {
                            return (
                            <CardList 
                                key={dataCardList.key}
                                compData={dataCardList} />)
                        })}
                    </div>
                );
            })}            
        </>
    );
}