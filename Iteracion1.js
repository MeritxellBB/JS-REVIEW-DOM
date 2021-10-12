/*Iteración 1: Interacción con el DOM

1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let myList = document.createElement("ul");
document.body.appendChild(myList);
for (const country of countries) {
	let myListElement=document.createElement("li");
	myListElement.innerHTML=country;
	myList.appendChild(myListElement);
}

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/
let myRemove = document.querySelector(".fn-remove-me");
myRemove.parentNode.removeChild(myRemove);

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let myCarList = document.createElement("ul");
let myDiv = document.querySelector("[data-function='printHere']");
myDiv.appendChild(myCarList);
for (const car of cars) {
	let myCarElement=document.createElement("li");
	myCarElement.innerHTML=car;
	myCarList.appendChild(myCarElement);
}

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const newCountries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
let myUl =document.createElement("ul");
myUl.setAttribute("id","myList");
document.body.appendChild(myUl);
for (const country of newCountries) {
	let divOne =document.createElement("div");
	let myh4 =document.createElement("h4");
	let myImg =document.createElement("img");
	myh4.innerHTML=country.title;
	myImg.src=country.imgUrl;
	myUl.appendChild(divOne);
	divOne.appendChild(myh4);
	divOne.appendChild(myImg);	
}



/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/
let myButton = document.createElement("button");
myButton.innerHTML = "Elimina";
document.body.appendChild(myButton);
function deleteLastElement() {
let elementToDelete = myUl.lastChild;
elementToDelete.parentNode.removeChild(elementToDelete);
}
myButton.addEventListener("click", deleteLastElement); 
