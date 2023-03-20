import { Element } from "./element.js";
import { addImg, toggleMenu } from "./function.js";
let main = document.querySelector('main')
//call de function for toogle de menu of mobil device
toggleMenu()
//create de loader for images
let element = new Element();
let loader = element.createElement('div', ['loader'])

//Select all image of the DOM
let images = document.querySelectorAll('.img');
for(let i = 0; i< images.length; i++){
    images[i].appendChild(loader.cloneNode())
    
}
await addImg(
    './img/thierry.png',
    document.querySelector('#home .box .box-img .img')
)
await addImg(
    './img/logo_thierry.png',
    document.querySelector('nav .logo a .img')
)
await addImg(
    './img/courseOnline.PNG',
    document.querySelector('#project .list li .img.courseOnline')
)
await addImg(
    './img/myport.PNG',
    document.querySelector('#project .list li .img.thierry509')
)
await addImg(
    './img/batay_nan_espas.PNG',
    document.querySelector('#project .list li .img.batay')
)
function ScrollY(){
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

}
//fixed elements