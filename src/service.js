class RickAndMortyService {
    constructor() {
      this.myurl = "https://rickandmortyapi.com/api/character";
    }
  
    async getAllCharacters() {
      try {
        const response = await fetch(this.myurl);
        const mycharacters = await response.json();
        const mycharacterslist = [];
  
        for (let i = 0; i < mycharacters.results.length; i++) {
          mycharacterslist.push({
            image: mycharacters.results[i].image,
            name: mycharacters.results[i].name,
            status: mycharacters.results[i].status,
            species: mycharacters.results[i].species,
            firstseen: mycharacters.results[i].origin.name,
            location: mycharacters.results[i].location.name
          });
        }
  
        return mycharacterslist;
      } catch (error) {
        console.error("Error:", error);
      }
    }
}
  
export default RickAndMortyService;