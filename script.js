let letrasVistas = 0; // inicializamos el contador de letras vistas

const contador = document.getElementById("contador"); // obtenemos el elemento del contador en el DOM


// Función para voltear la tarjeta
function flipCard(card) {

    card.classList.toggle("flipped"); // agregamos o quitamos la clase "flipped"

    if (card.classList.contains("vista")) {

    } else {

        letrasVistas++; // incrementamos el contador

        card.classList.add("vista"); // marcamos la tarjeta como vista

        contador.textContent = letrasVistas; // actualizamos el contador en el DOM
    }
}


// Función para filtrar las tarjetas
function filter(filtro) {

    const cards = document.getElementsByClassName("item-card"); // obtenemos todas las tarjetas

    for (let i = 0; i < cards.length; i++) {

        const card = cards[i]; // obtenemos la tarjeta actual

        if (filtro === "vocales") {

            if (card.dataset.tipo === "vocal") {

                card.hidden = false; // mostramos la tarjeta

            } else {

                card.hidden = true; // ocultamos la tarjeta
            }

        } else if (filtro === "todas") {

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

