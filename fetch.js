console.log('Hola Mundo');


const url = "https://rickandmortyapi.com/api/character";

async function obtenerPersonajes() {
    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        if (data && data.results) {
            const container = document.getElementById('container');
            container.innerHTML = "";

            data.results.forEach(personaje => {
                const div = document.createElement('div');
                div.classList.add('card');

                const contenido = `
                    <img src="${personaje.image}" alt="${personaje.name}">
                    <h2>${personaje.name}</h2>
                    <p><b>Especie:</b> ${personaje.species}</p>
                    <p><b>Género:</b> ${personaje.gender}</p>
                    <p><b>Origen:</b> ${personaje.origin.name}</p>
                    <p><b>Ubicación:</b> ${personaje.location.name}</p>
                `;

                
                div.innerHTML = contenido;
                container.appendChild(div);
            });
        } else {
            console.log("No se encontraron datos.");
        }
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

document.addEventListener('DOMContentLoaded', obtenerPersonajes);