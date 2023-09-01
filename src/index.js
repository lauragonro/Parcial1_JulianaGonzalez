import RickAndMortyService from './service';

const service = new RickAndMortyService();

async function createCharacterList() {
    const AllCharacters = await service.getAllCharacters();

    for (let i = 0; i < AllCharacters.length; i++) {
        const character = AllCharacters[i]
        document.querySelector(".character-list").innerHTML += createCharacterCard(character)
        addCharacterListeners(character)
    }
}

function createCharacterCard(character) {
    return `<div class="character-card">
        <div class="image">
            <img>${character.image}</img>
        </div>
        <div class="text">
            <div class="primary-font">
                <h2>${character.name}</h2>
            </div>
            <div class="secondary-font">
                <p><span>${character.status}</span><span>${character.species}</span></p>
                <h4>Last known location:</h4>
                <span>${character.location.name}</span>
                <h4>First seen in:</h4>
                <p><span>${character.origin.name}</span></p>
            </div>
        </div>  
    </div>`;
}

function addCharacterListeners(character) {
    const btn = service.querySelector("button");

    function handleClick(e) {
    output.textContent += `Hola, soy ${e.currentTarget.tagName}\n`;
    }

    btn.addEventListener("click", handleClick);
}

createCharacterList();
