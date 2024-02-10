import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(() => {
        /** el objeto de la clase AbortController nos permite manejar las ocasiones en que el usuario aborta o detiene un fetch haciendo clic en, por ejemplo, un botón cancelar */
        const abortController = new AbortController();
        /** para poder manipular el objeto abortController en la función externa al useEffect, llamada handleCancelRequest, es que asignamos su estado mediante un useState */
        setController(abortController);

        /** permite mostrar un loading mientras se traen los datos del fetch */
        setLoading(true);

        /** mediante signal: abortController.signal indicamos a fetch que el usuario puede abortar la carga de los datos */
        fetch(url, { signal: abortController.signal  })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                /** AbortError es un error generado por el abortController */
                if (error.name === 'AbortError'){
                    console.log('Request cancelled')
                }else {
                    setError(error)
                }                
            })
            .finally(() => setLoading(false));
        
        /** mediante el return llamamos una función que se ejecuta cuando se desmonta el componente, es decir, cuando ya no es visible en pantalla (cerramos la ventana o cambiamos de página). Vamos a llamar a abortController.abort() indicando que se interrumpa el fetch */
        return () => abortController.abort();
    }, []);

    /** función para manejar la cancelación de la carga hecha por el usuario */
    const handleCancelRequest = () => {
        if(controller){
            controller.abort();
            setError('Request cancelled');
        }
    }

    return { data, loading, error, handleCancelRequest }
}