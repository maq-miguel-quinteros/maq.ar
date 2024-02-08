import { useState, useEffect } from "react";

import DB from './DB.json';

import { Default } from "../components/templates/Default";
import { CardsPresentation } from "../components/templates/CardsPresentation";

/* import { collection, getDocs, } from 'firebase/firestore';
import { dataBase } from "../database/firebase"; */


export const Home = () => {

    /* const [prueba, setPrueba] = useState([]);
    const [aux, setAux] = useState();

    const getComponents = (database, collectionPath) => {

        const collectionRef = collection(database, collectionPath);

        getDocs(collectionRef)
            .then((docsRef) => {                
                docsRef.docs.map((docRef) => {                    
                    let otro = docRef.data();
                    setAux()
                    console.log(aux)

                    if (docRef.data().collections){                        
                        docRef.data().collections.forEach(collect => {
                            getComponents(database, 
                                collectionPath + '/' + docRef.id + '/' + collect);
                                
                        });
                    }                    
                })
                //console.log(prueba)
                
            })
            
    } */

/*     useEffect(() => {       
        console.log(getComponents(dataBase, 'cardPresentation'))

    }, []); */

    const [dataBase, setDataBase] = useState();

    const getDataBase = () => {
        return new Promise ((resolve, reject) => {
            resolve(DB);
        })
    }

    useEffect( () => {
        getDataBase()
            .then((response) => {                
                setDataBase(response);
                console.log(dataBase);
            })            
    }, []);

    return (
        <>
            {dataBase && 
            <Default cd={dataBase}> 
                <CardsPresentation 
                    cd={dataBase.cardPresentation} />
            </Default>
            }

        </>
    );

}