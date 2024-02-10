/* import { useState, useEffect } from "react"; */
/* import { useFetch } from "../hooks/useFetch"; */

/** IMPORTAMOS EL JSON LOCAL */
/* import DB from './DB.json'; */

import { Default } from "../components/templates/Default";
import { CardsPresentation } from "../components/templates/CardsPresentation";

/** Método 4 utilizamos solo renderizamos cuando los datos fueron traídos, para hacerlo utilizamos un función en un helper llamada fetchData que se va a encargar del fetch */
import { fetchData } from "../helpers/fetchData";
/** Mediante el componente Suspense de react indicamos que, lo que esté sus children se rendericen cuando tengan los datos que necesitan para hacerlo */
import { Suspense } from "react";

const apiData = fetchData('https://api.npoint.io/baac800a4b2ada5181e5');

export const Home = () => {

/** Método 1: TRABAJAMOS CON UN ARCHIVO JSON LOCAL PARA HACER PRUEBAS */
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

/** Método 2: FETCH DE DATOS DE UNA API EN EL MISMO COMPONENTE  */
/*  
    const [data, setData] = useState();
    useEffect(()=>{
        fetch('https://api.npoint.io/baac800a4b2ada5181e5')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); 
 */

    /** Método 3: CREAMOS UN custom hook PARA MANEJAR EL FETCH */
/*     
    const { data, loading, error, handleCancelRequest } = useFetch('https://api.npoint.io/baac800a4b2ada5181e5'); 
*/

    /** llamamos a la función read del helper para traer los datos */
    const data = apiData.read();

    return (        

        <>
            {/** el componente Suspense permite que solo se renderice cuando los componentes tengas los datos que necesitan */}
            <Suspense fallback={<div>Loading</div>} >
{/*             {<button onClick={handleCancelRequest}>cancelar petición</button>}
            {loading && <span>Cargando</span>}
            {error && <span>Error: {error}</span>} */}
            {data && 
            <Default compData={data}> 
                <CardsPresentation 
                    compData={data.cardPresentation} />
            </Default>
            }
            </Suspense>

        </>
    );

}