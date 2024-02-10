const getSuspender = (promise) => {
    let status = 'pending';
    let response;

    /** getSuspender recibe la promesa y la resuelve tanto para res (respuesta) como para err (error) */
    const suspender = promise.then(
        (res) => {
            status = 'success';
            response = res;
        },
        (err) => {
            status = 'error';
            response = err;
        }
    );

    /** mediante el método read solicitamos los datos resueltos de la promesa y guardados en suspender */
    const read = () => {
        switch (status){
            case 'pending':
                throw suspender;
            case 'error':
                throw response;
            default:
                return response;
        }
    }

    /** getSuspender devuelve el método read para ser usando cuando necesitemos los datos que trae mediante la promesa que recibe */
    return { read };
}

export const fetchData = (url) =>{
    const promise = fetch(url)
        .then((response) => response.json())
        .then((data) => data );

    return getSuspender(promise);
}