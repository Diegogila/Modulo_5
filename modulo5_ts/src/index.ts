import * as _ from 'lodash';

function componente(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hola','Webpack'],' ');
    return element;
}

document.body.appendChild(componente());