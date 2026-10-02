let letrasVistas = 0; // inicializamos el contador de letras vistas


// Función para voltear la tarjeta
function flipCard(card) {

    card.classList.toggle("flipped"); // agregamos o quitamos la clase "flipped"

    if (!card.classList.contains("vista")) {

        letrasVistas++; // incrementamos el contador

        card.classList.add("vista"); // marcamos la tarjeta como vista

        const contador = document.getElementById("contador");
        contador.textContent = letrasVistas; // actualizamos el contador
    }
}


// Función para filtrar las tarjetas
function filter(filtro) {

    const cards = document.getElementsByClassName("item-card");

    for (let i = 0; i < cards.length; i++) {

        const card = cards[i];

        if (filtro === "vocales") {

            if (card.dataset.tipo === "vocal") {

                card.hidden = false;

            } else {

                card.hidden = true;
            }

        } else if (filtro === "todas") {

            card.hidden = false;
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
