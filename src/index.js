document.addEventListener("DOMContentLoaded", function() {
  const pokemonInput = document.getElementById("pokemon-search-input")
  const pokemonArray = pokemonData.pokemons
  const pokemonContainer = document.getElementById('pokemon-container')

  pokemonInput.addEventListener('keyup', (e) => {
      const enteredValue = e.target.value
      while (pokemonContainer.firstChild) {
          pokemonContainer.removeChild(pokemonContainer.firstChild);
      }
      if(enteredValue != ""){
        const matchingPokemons = pokemonArray.filter((pokemon) => {
          return pokemon.name.includes(enteredValue)
        })
        console.log(matchingPokemons.length)

        matchingPokemons.forEach((pokemon)=>{
          displayMyShit(pokemon)
        })
      }
  })

  function displayMyShit(pokemon){
    const emptyDiv = document.createElement('div')
    pokemonContainer.appendChild(emptyDiv)
    const singlePokemon = document.createElement('div')
    singlePokemon.className = 'pokemon-container'

    //${pokemon["sprites"]["front"]}
    singlePokemon.innerHTML = `
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img src=` + `${pokemon["sprites"]["front"]}` + `>
        </div>
      </div>
      <p style="padding:10px;" class="center-text flip-image" data-pokename=` + `${pokemon.name}` + `data-action="flip-image">flip card</p>
    </div>
    `
    // document.querySelector(`#pokemon-container `)
    emptyDiv.appendChild(singlePokemon)
  }

  pokemonContainer.addEventListener('click', e => {
    if (e.target.innerText === "flip card") {
      if (e.target.parentNode.querySelector('img').src.includes('back')){
        const findPokemon = e.target.parentNode.querySelector('h1').innerText
        const myPokemon = pokemonArray.find(pokemon => pokemon.name === findPokemon)
        e.target.parentNode.querySelector('img').src = myPokemon["sprites"]["front"]
      }else{
        const findPokemon = e.target.parentNode.querySelector('h1').innerText
        const myPokemon = pokemonArray.find(pokemon => pokemon.name === findPokemon)
        e.target.parentNode.querySelector('img').src = myPokemon["sprites"]["back"]
      }
    }
  })
})
