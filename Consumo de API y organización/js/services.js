export async function getPokemons() {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");

    const data = await response.json();

    return data.results.map((pokemon, index) => {
        return {
            name: pokemon.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
    });

}