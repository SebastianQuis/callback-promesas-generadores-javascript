

import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const callBacksComponent = ( element ) => {
    const id1 = '5d86371fd55e2e2a30fe1cc4';
    const id2 = '5d86371fd55e2e2a30fe1cc3';
    
    findHero( id1, ( error, hero1 ) => {
        // element.innerHTML = hero?.name ?? 'Sin heroe'; // si no hay heroe, pone undefined 
        if (error) {
            element.innerHTML = error; 
            return;
        }
        
        findHero( id2, ( error, hero2 ) => {
            if (error) {
                element.innerHTML = error; 
                return;
            }
            element.innerHTML = `${hero1.name} | ${hero2.name}`; 
        });
    });
}


/**
 * 
 * @param { String } id 
 * @param { ( error: String||Null, hero: Object ) => void } callBack 
 */

const findHero = ( id, callBack ) => {
    const hero = heroes.find( hero => hero.id === id );
    
    if (!hero) {
        callBack(`El heroe con ${id} no existe`);
        return;
    }
    
    callBack(null, hero); // null o undefined
}


