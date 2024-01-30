import { useState, useEffect } from "react";

import { Default } from "../components/templates/Default";
import { CardsPresentation } from "../components/templates/CardsPresentation";
import DB from './DB.json';


export const Home = () => {

    const [dataBase, setDataBase] = useState(false);    

    const getDataBase = () => {
        return new Promise ((resolve, reject) => {
            resolve(DB);
        })
    }

    useEffect( () => {
        getDataBase()
            .then((response) => {
                setDataBase(response);                
            })            
    }, []);

    return (
        <>
            {dataBase && 
            <Default cd={dataBase}> 
                <CardsPresentation 
                    cd={dataBase.cardsPresentation} />
            </Default>
            }
            
        </>
    );
}