/**
* 
* @param {HTMLDivElement} element
*/

//! PROMESAS NO SECUENCIALES

export const asyncAwaitNoSecuencial = async (element) => {
    console.time('start');

    try {
        const [value1, value2, value3 ] = await Promise.all([
            slowPromise(),
            mediumPromise(),
            fastPromise(),
        ]);
    
        element.innerHTML = `
            value1: ${value1} <br/>
            value2: ${value2} <br/>
            value3: ${value3} <br/>
        `;    
    } catch (error) {
        element.innerHTML = error;        
    }

    console.timeEnd('start');
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