class RickAndMortyService {
    // el constructor debe inicializar una variable con la url de acceso base al API
	constructor() {
        const myurl = 'https://rickandmortyapi.com/api/character'
    }

	async getAllCharacters() {
        try {
            const response = await fetch(this.myurl);
            const mycharacters = await response.json();
            const mycharacterslist = [];
    
            for (let i = 0; i < mycharacters.results.length; i++) {
                mycharacterslist.push({
                    name: mycharacters.results[i].name
                })
            }

            console.log(mycharacterslist)

        } catch (error) {
            console.error("Error:", error);
        }
	} 
}

export default RickAndMortyService;
