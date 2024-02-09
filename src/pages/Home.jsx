import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

/** IMPORTAMOS EL JSON LOCAL */
/* import DB from './DB.json'; */

import { Default } from "../components/templates/Default";
import { CardsPresentation } from "../components/templates/CardsPresentation";

export const Home = () => {

/** TRABAJAMOS CON UN ARCHIVO JSON LOCAL PARA HACER PRUEBAS */
/*  
    const [dataBase, setDataBase] = useState();
    const getDataBase = () => {
        return new Promise ((resolve, reject) => {
            resolve();
        })
    }
    useEffect( () => {
        getDataBase()
            .then((response) => {                
                setDataBase(response);
                console.log(dataBase);
            })            
    }, []); 
*/

/** PARA HACER UN FETCH DE DATOS DE UNA API EN EL MISMO COMPONENTE PASAMOS ESTO A UN CUSTOM HOOK EN LA CARPETA hooks LLAMADO useFecth */
/*  
    const [data, setData] = useState();
    useEffect(()=>{
        fetch('https://api.npoint.io/baac800a4b2ada5181e5')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); 
 */

    const { data, loading, error, handleCancelRequest } = useFetch('https://api.npoint.io/baac800a4b2ada5181e5');

    return (
        <>
            {<button onClick={handleCancelRequest}>cancelar petición</button>}
            {loading && <span>Cargando</span>}
            {error && <span>Error: {error}</span>}
            {data && 
            <Default compData={data}> 
                <CardsPresentation 
                    compData={data.cardPresentation} />
            </Default>
            }

        </>
    );

}