/**
* 
* @param {HTMLDivElement} element
*/

export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';
    
    const renderHTML = ( value ) => {       
        element.innerHTML = value;
    }

    // MEDICION DE RESPUESTAS DE ENDPOINTS HTTP
    Promise.race([
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
    ])
    .then( value => renderHTML(value) );
    
    // .then( renderHTML );

}


const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);
});

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Medium promise');
    }, 1500);
});

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000);
});
