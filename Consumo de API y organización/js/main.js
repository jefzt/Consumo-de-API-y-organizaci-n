import { getPokemons } from "./services.js";
import { renderPokemons } from "./ui.js";

const btn = document.getElementById("load-btn");
const spinner = document.getElementById("spinner");

btn.addEventListener("click", async () => {

    spinner.classList.remove("hide");

    const pokemons = await getPokemons();

    spinner.classList.add("hide");

    renderPokemons(pokemons);

});