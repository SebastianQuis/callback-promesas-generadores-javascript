/**
* 
* @param {HTMLDivElement} element
*/

import { heroes } from "../data/heroes";

export const promisesComponent = (element) => {
    const renderHTMLResolve = (hero1, hero2) => {
        // element.innerHTML = `EL hero es: ${hero.name}`;
        element.innerHTML = `
            hero1: ${hero1.name} || 
            hero2: ${hero2.name} 
        `;
    }
    
    const renderHTMLError = (error) => {
        element.innerHTML = `${error}`;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1cc3';

    
    //! FORMA OPTIMA - promise all
    Promise.all([
        findHero( id1 ),
        findHero( id2 ),
    ])
    .then( ( [hero1, hero2] ) => renderHTMLResolve( hero1, hero2) )
    .catch( error => renderHTMLError(error) );
    
    
    //! FORMA 2 - promises hell
    // let hero1;
    // findHero(id1)
    //     .then( (heroA) => {
    //         hero1 = heroA;
    //         return findHero(id2);
    //     })
    //     .then( (heroB) => renderHTMLResolve(hero1, heroB))
    //     .catch(renderHTMLError);


    //! FORMA 1 - promise
    // findHero(id1)
    //     .then((hero1) => {
    //         findHero(id2)
    //             .then((hero2) => {
    //                 renderHTMLResolve(hero1, hero2);
    //             })
    //             .catch(renderHTMLError);
    //     })
    //     .catch(renderHTMLError);
    
    

    // findHero(id1)
    //     .then( hero => renderHero(hero))
    //     .catch( error => renderError(error) );
}


const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find( hero => hero.id === id );

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`El heroe con ${id} no existe`);
    });
}
