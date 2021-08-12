import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
import printMe from './print.js';

console.log(toml.title);
console.log(toml.owner.name);
console.log(yaml.title);
console.log(yaml.owner.name);
console.log(json.title);
console.log(json.owner.name);
function component(){

    const element = document.createElement("div");
    const btn = document.createElement("button");

    element.innerHTML = myName("Josh");
    element.classList.add('hello');

    btn.innerHTML = 'click me and check the console!'
    btn.onclick = printMe;


    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    element.appendChild(btn);
    console.log(Data)
    console.log(Notes)
    return element
}

document.body.appendChild(component());