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

    //image
    const pokemon_image = data.sprites.front_default;
    const image_element = document.getElementById(`pokemon-image`);
    image_element.src = pokemon_image;
    image_element.style.display = `block`;
    
    // name
    const pokemon_name = data.species.name;
    const name_element = document.getElementById(`pokemon-name`);
    name_element.innerText = pokemon_name.toUpperCase();

    // type
    let pokemon_type = data[`types`][`0`][`type`][`name`];
    const type_element1 = document.getElementById(`pokemon-type1`);
    type_element1.innerText = pokemon_type.toUpperCase();

    pokemon_type = "";
    if (data[`types`][`1`] !== undefined) {
      pokemon_type = `/${data[`types`][`1`][`type`][`name`]}`;
    }    
    const type_element2 = document.getElementById(`pokemon-type2`);
    type_element2.innerText = pokemon_type.toUpperCase();
    
    switch (type_element1.innerText.toLowerCase()) {
      case "bug":
        type_element1.style.color = `lime`;
        break;
      case "dark":
        type_element1.style.color = `darkslateblue`;
        break;
      case "dragon":
        type_element1.style.color = `indigo`;
        break;
      case "electric":
        type_element1.style.color = `yellow`;
        break;
      case "fairy":
        type_element1.style.color = `palevioletred`;
        break;
      case "fighting":
        type_element1.style.color = `orangered`;
        break;
      case "fire":
        type_element1.style.color = `red`;
        break;
      case "flying":
        type_element1.style.color = `aliceblue`;
        break;
      case "ghost":
        type_element1.style.color = `violet`;
        break;
      case "grass":
        type_element1.style.color = `green`;
        break;
      case "ground":
        type_element1.style.color = `brown`;
        break;
      case "ice":
        type_element1.style.color = `cyan`;
        break;
      case "poison":
        type_element1.style.color = `purple`;
        break;
      case "psychic":
        type_element1.style.color = `fuchsia`;
        break;
      case "rock":
        type_element1.style.color = `darkgray`;
        break;
      case "steel":
        type_element1.style.color = `teal`;
        break;
      case "water":
        type_element1.style.color = `blue`;
        break;
      default:
        type_element1.style.color = `gray`;
    }

    switch (type_element2.innerText.toLowerCase()) {
      case "/bug":
        type_element2.style.color = `lime`;
        break;
      case "/dark":
        type_element2.style.color = `darkslateblue`;
        break;
      case "/dragon":
        type_element2.style.color = `indigo`;
        break;
      case "/electric":
        type_element2.style.color = `yellow`;
        break;
      case "/fairy":
        type_element2.style.color = `palevioletred`;
        break;
      case "/fighting":
        type_element2.style.color = `orangered`;
        break;
      case "/fire":
        type_element2.style.color = `red`;
        break;
      case "/flying":
        type_element2.style.color = `lightskyblue`;
        break;
      case "/ghost":
        type_element2.style.color = `violet`;
        break;
      case "/grass":
        type_element2.style.color = `green`;
        break;
      case "/ground":
        type_element2.style.color = `brown`;
        break;
      case "/ice":
        type_element2.style.color = `cyan`;
        break;
      case "/poison":
        type_element2.style.color = `purple`;
        break;
      case "/psychic":
        type_element2.style.color = `fuchsia`;
        break;
      case "/rock":
        type_element2.style.color = `darkgray`;
        break;
      case "/steel":
        type_element2.style.color = `teal`;
        break;
      case "/water":
        type_element2.style.color = `blue`;
        break;
      default:
        type_element2.style.color = `gray`;
    }    

    // generation
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