const container = document.querySelector('#container'); // #container
console.dir(container.firstElementChild) // .display
const controls = document.querySelector('.controls');
console.dir(controls.previousElementSibling) // .display
// querySelectorAll() - selects all of the matches
let newDiv = document. createElement('div');
newDiv.style.color = 'blue';
newDiv.style.csstext = 'color: blue; background: white;';
newDiv.setAttribute ('style', 'color: blue; background: white;');
newDiv.style['background-color'] // also works
// Editing attributes
newDiv.setAttribute ('id', 'theDiv');
newDiv.getAttribute ('id');
newDiv.removeAttribute ('id');

newDiv.classList.add('new');                                      
// adds class "new" to your new div
newDiv.classList.remove('new');                                   
// removes "new" class from div
newDiv.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

newDiv.textContent = 'Hello World!';

const pElement = document.createElement('p');
pElement.textContent = "Hey I'am red!";
pElement.style.color = 'red';
container.appendChild(pElement);

const h3Element = document.createElement('h3');
h3Element.textContent = "Hey I'am a blue h3!";
h3Element.style.color = 'blue';
container.appendChild(h3Element);


const divInContainer = document.createElement('div');
divInContainer.classList.add('divInContainer');
divInContainer.setAttribute('style', 'border: solid, 3px, black; background: pink;');

const h1InDiv = document.createElement('h1');
h1InDiv.textContent = "I'am in a div"
divInContainer.appendChild(h1InDiv);

const pInDiv = document.createElement('p');
pInDiv.textContent = "ME TOO!";
divInContainer.appendChild(pInDiv);

container.appendChild(divInContainer);