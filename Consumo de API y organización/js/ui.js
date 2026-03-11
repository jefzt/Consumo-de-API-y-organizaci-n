export function renderPokemons(pokemons) {

    const container = document.getElementById("container");

    container.innerHTML = "";

    pokemons.forEach(pokemon => {

        container.innerHTML += `
        <div class="card">
            <img src="${pokemon.image}">
            <h3>${pokemon.name}</h3>
            <p>#${pokemon.id}</p>
        </div>
        `;

    });

}