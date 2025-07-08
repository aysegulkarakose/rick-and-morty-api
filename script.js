async function getCharacters() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        const characters = data.results;
        const charactersContainer = document.getElementById("characterscontainer");

        characters.forEach(character => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.status}</p>
        <p>${character.species}</p>`;
            card.addEventListener("click", () => {
                alert(`origin: ${character.origin.name}`);
            });

            charactersContainer.appendChild(card);
        });
    }
    catch (error) {
        console.error("hata", error);
    }
}
getCharacters();
