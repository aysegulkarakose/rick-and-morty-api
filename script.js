async function findCharacter(page = 1) {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const url = `https://rickandmortyapi.com/api/character/?name=${input}&page=${page}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        showCharacters(data.results);
        showPagination(data.info.pages);
    }
    catch (error) {
        console.error("Bulunamadi", error);
        document.getElementById("pagination").innerHTML = "";
    }
}

function showCharacters(characters) {
    const container = document.getElementById("characterscontainer");
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>${character.status}</p>
            <p>${character.species}</p>
        `;
        card.addEventListener("click", () => {
            alert(`origin: ${character.origin.name}`);
        })
        container.appendChild(card);
    });
}

function showPagination(totalPages) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = "button";
        button.addEventListener("click", () => findCharacter(i));
        pagination.appendChild(button);
    }
}

window.onload = () => {
    findCharacter();
}