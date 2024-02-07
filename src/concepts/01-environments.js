


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponent = (element) => {
    // ACCEDER A LAS VARIABLES DE ENTORNO MEDIANTE VITE DIRECTO
    console.log( import.meta.env );

    const html = `
        DEV: ${import.meta.env.DEV} <br/>
        PROD: ${import.meta.env.PROD} <br/>
        
        <br/>
        
        API KEY: ${import.meta.env.VITE_API_KEY} <br/>
        BASE URL: ${import.meta.env.VITE_BASE_URL} <br/>
    `;

    element.innerHTML = html;
}

