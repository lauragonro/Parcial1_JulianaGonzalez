import RickAndMortyService from "./service";

const service = new RickAndMortyService();

async function createCharacterList() {
  const AllCharacters = await service.getAllCharacters();
  console.log(AllCharacters);
  for (let i = 0; i < AllCharacters.length; i++) {
    const character = AllCharacters[i];
    document.querySelector(".character-list").innerHTML += createCharacterCard(
      character
    );
    addCharacterListeners(character);
  }
}

function createCharacterCard(character) {
    return `<div class="character-card">
    <div class="image">
        <img src="${character.image}"
        width = 120px
        style="border-radius:10px 0 0 10px;"
        ></img>
        </div>
    <div class="text">
        <div class="name">
            <h2>${character.name}</h2>
        </div>
        <div class="status">
            <p><span data-status={{${character.status}}} class="dot"></span> <span>${character.status}</span> - <span>${character.species}</span></p>
        </div>
        <br> </br>
        <div class="secondary-font">
            <p>Last known location:</p>
        </div>
        <div class="primary-font">
            <p><span>${character.location}</span></p>
        </div>
        <br> </br>
        <div class="secondary-font">
            <p>First seen in:</p>
        </div>
        <div class="primary-font">
            <p><span>${character.firstseen}</span></p>
        </div>
    </div>`;
}

function addCharacterListeners(character) {
    const output = document.querySelector(".character-card");
    const btn = document.querySelector(".character-card");
  
    function handleClick(e) {
      output.textContent += `<br>Hola, mi nombre es ${character.name} </br>`;
      document.body.style.backgroundColor = `#f5f5f5`;
    }
  
    btn.addEventListener("click", handleClick);
}

createCharacterList();
