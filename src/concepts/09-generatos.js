/**
* 
* @param {HTMLDivElement} element
*/

// const myGenerator = myGeneratorFunction();
// console.log(myGenerator.next());



export const generatorFunctionsComponent = (element) => {
    const genIds = generatorIds();

    const button = document.createElement('button');
    button.innerText = 'Click here!!'
    element.append(button);

    const renderButton = () => {
        const {value} = genIds.next();
        button.innerText = 'Clicks: ' + value;
    }

    button.addEventListener( 'click', renderButton)
}


function* generatorIds() {
    let value = 0;

    while( true ) {
        yield ++value;
    }
}


function* myGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';

    return 'Return valor!!';

    yield 'No acceder a valor';
}

