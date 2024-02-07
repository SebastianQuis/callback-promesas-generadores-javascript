
/**
* 
* @param {HTMLDivElement} element
*/

import { heroes } from "../data/heroes"

export const asyncAwait = async (element) => {
    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    try {
        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );

        element.innerHTML = `hero1: ${hero1.name} || hero2: ${hero2.name}`;    
    } catch (error) {
        element.innerHTML = error;
    }
}



const findHero = async (id) => {
    const hero = heroes.find( hero => hero.id === id);
    if (!hero) {
        throw `el heroe con ${id} no existe`;
    }

    return hero;
}