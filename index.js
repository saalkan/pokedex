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
    name_element.innerText = pokemon_name.toUpperCase();

    let pokemon_type = "";
    if (data[`types`][`1`] == undefined) {
      pokemon_type = data[`types`][`0`][`type`][`name`];
    } else {
      pokemon_type = `${data[`types`][`0`][`type`][`name`]}\n/${data[`types`][`1`][`type`][`name`]}`
    }
    const type_element = document.getElementById(`pokemon-type`);
    type_element.innerText = pokemon_type.toUpperCase();
    pokemon_type1 = undefined;
    pokemon_type2 = undefined;

    let pokemon_gen = "";
    if (pokemon_id <= 151) {
      pokemon_gen = "I";
    } else if (pokemon_id <= 251) {
      pokemon_gen = "II";
    } else if (pokemon_id <= 386) {
      pokemon_gen = "III";
    } else if (pokemon_id <= 493) {
      pokemon_gen = "IV";
    } else if (pokemon_id <= 649) {
      pokemon_gen = "V";
    } else if (pokemon_id <= 721) {
      pokemon_gen = "VI";
    } else if (pokemon_id <= 809) {
      pokemon_gen = "VII";
    } else if (pokemon_id <= 905) {
      pokemon_gen = "VIII";
    } else {
      pokemon_gen = "IX";
    }
    const gen_element = document.getElementById(`pokemon-gen`);
    gen_element.innerText = `GEN\n${pokemon_gen}`;
  }
  catch (error) {
    console.error(error);
  }
}