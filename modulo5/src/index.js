import _ from 'lodash'
import './estilo.css';
import Imagen from './Portada.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilo.scss';

if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then( registration => {
            console.log('SW registrado', registration);
        }).catch(err => console.log('SW no registrado: ', err))
    });
}

function componente(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hola',Datos[0][1]],' ');
    element.classList.add('fondo');
    const myImage = new Image();
    myImage.src = Imagen;
    element.appendChild(myImage);
    //element.classList.add('fondo')

    console.log(Datos);
    return element;
}
console.log(yaml.title)
console.log(json5.owner.name)
document.body.appendChild(componente());
document.body.classList.add('fondo')