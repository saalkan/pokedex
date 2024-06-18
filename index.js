// source: https://youtu.be/37vxWr0WgQk

//fetch_pokemon();

async function fetch_pokemon() {
  try {
    const pokemon_id = Math.floor((Math.random() * 1025) + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`);
    if (!response.ok) {
      throw new Error(`Invalid pokemon.`);
    }

    const data = await response.json();

    const pokemon_image = data.sprites.front_default;
    const image_element = document.getElementById(`pokemon-image`);
    image_element.src = pokemon_image;
    image_element.style.display = `block`;

    const pokemon_name = data.species.name;
    const name_element = document.getElementById(`pokemon-name`);
    name_element.innerText = pokemon_name;
    name_element.style.display = "inline";
  }
  catch (error) {
    console.error(error);
  }
}