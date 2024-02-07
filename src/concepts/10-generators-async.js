/**
* 
* @param {HTMLDivElement} element
*/

import { heroes } from "../data/heroes";


export const generatorsAsync = async (element) => {

    const secondGrtr = secondGenerator(); // REGRESA VALOR Y DONE = FALSE
    let isDone = true;

    do {
        const { value , done } = await secondGrtr.next();
        console.log(`${ value } || ${ done }`);
        isDone = done;
        if (isDone) return;
        element.innerText = value;

    } while ( !isDone );

}


async function* secondGenerator() {
    for (let i = 1; i < 5; i++) {
        await sleep();
        yield +i;
    }

    return 'Se acabó el timepo!!'
}


const sleep = () => new Promise( (resolve) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});


// export const generatorsAsync = async (element) => {
//     const secondGenerator = getSecond();
//     let isDone = true;

//     do {
//         const { value, done } = await secondGenerator.next();
//         isDone = done;
//         console.log(`${ isDone } || ${ value }`);
//         if (isDone ) break;
//         element.innerHTML = value;

//    } while ( !isDone );
// }

// async function* getSecond() { 
//     for (let i = 1; i < 3; i++) {
//         await sleep();
//         yield +i;
//     }
    
//     return 'se acabó el tiempo'
// }

// const sleep = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }




// export const generatorsAsync = async (element) => {
//     const heroGenerator = getHeroGenerator();
//     let isDone = true;

//     do {
//         const { value, done } = await heroGenerator.next();
//         isDone = done;
//         console.log(`${ isDone } || ${ value }`);
//         if (isDone ) break;
//         element.innerHTML = value;
//    } while ( !isDone );
// }

// //! OBTENER NOMBRE DEL HEROE Y SI NO VIENE NADA, ENVIAR MENSAJE NO HAY MAS
// async function* getHeroGenerator()  {
//     for( const hero of heroes ){
//         await sleep();
//         yield hero.name;
//     }

//     return 'no hay mas!!'
// }

// //! ESPERAR 1 SEGUNDO
// const sleep = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }
