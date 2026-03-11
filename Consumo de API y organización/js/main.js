import { getPokemons } from "./services.js";
import { renderPokemons } from "./ui.js";

const btn = document.getElementById("load-btn");
const loading = document.getElementById("loading");

btn.addEventListener("click", async () => {

    loading.style.display = "block";

    const pokemons = await getPokemons();

    renderPokemons(pokemons);

    loading.style.display = "none";

});
