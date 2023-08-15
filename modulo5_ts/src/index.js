import _ from 'lodash'

function componente(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hola',Datos[0][1]],' ');
    return element;
}

document.body.appendChild(componente());
