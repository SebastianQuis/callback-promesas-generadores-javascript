/**
* 
* @param {HTMLDivElement} element
*/

import { heroes } from "../data/heroes";

export const asyncComponent = (element) => {
    const id = '5d86371fd55e2e2a30fe1ccb';

    console.log('inicio del componente');

    findHero( id )
        // .then( hero => element.innerHTML = hero.name)
        .then( hero => console.log(hero.name))
        .catch( error => element.innerHTML = error );

    
    console.log('fin del componente');
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = async (id) => {
    const hero = heroes.find( hero => hero.id === id);
    if (!hero) {
        throw `el heroe con ${id} no existe`;
    }
    
    return hero;
}