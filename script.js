let letrasVistas = 0; // inicializamos el contador de letras vistas
const vocales = []; // inicializamos array para guardar las vocales filtradas


// Función para voltear la tarjeta

function flipCard(card) { // declaramos la funcion voltear que recibe un parametro card
    card.classList.toggle("flipped"); // usamos toggle como interruptor, y classList para agregar o quitar la clase "flipped" al elemento card
    const contador = document.getElementById("contador"); // obtenemos el elemento del contador en el DOM
    if (card.classList.contains("vista")) { // validamos si tiene la clase "vista"
    } else { // si no tiene la clase "vista"
        letrasVistas++; // incrementamos el contador de letras vistas
        card.classList.add("vista"); // agregamos la clase "vista", esto hace que no se cuente de nuevo la misma letra
        contador.textContent = letrasVistas; // actualizamos el contador en el DOM con el valor de letrasVistas
    }
}


// Función para filtrar las tarjetas

function filter(filtro) { // declaramos la funcion filtrar
    const cards = document.getElementsByClassName("item-card"); // obtenemos todas las tarjetas con la clase "item-card"
    for (let i = 0; i < cards.length; i++) { // recorremos todos los elementos con la clase "item-card"
        const card = cards[i]; // obtenemos la tarjeta que esta en i
        if (filtro === "vocales") { // validamos si el filtro seleccionado es "vocales"
            if (card.dataset.tipo === "vocal") { // validamos si el atributo data-tipo del elemento card es igual a "vocal"

                card.hidden = false; // si es igual a "vocal" mostramos el elemento card
            } else {

                card.hidden = true; // si no es igual a "vocal" ocultamos el elemento card con la propiedad hidden
            }
        } else if (filtro === "todas") { // validamos si el filtro seleccionado es "todas"
            card.hidden = false; // mostramos todas las tarjetas
        }
    }
}


// Cargamos el navbar

fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("navbar").innerHTML = data;
    });


// Cargamos el footer

fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;

    });

// Cargamos el navbar
fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("navbar").innerHTML = data;
    });


// Cargamos el footer
fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    });
