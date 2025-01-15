async function FetchData() {
  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "312c0000d3msh4fdc1973c51ec6ep175949jsn34610c9e1160",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    for (let i = 0; i < result.length; i++) {
      MakeCard(result[i]);
    }
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

function MakeCard(game) {
  const container = document.querySelector(".gamecontainer");
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.src = game.thumbnail;
  img.style.width = "25vh";
  img.style.height = "20vh";
  img.style.margin = "2vh";
  card.appendChild(img);
  const title = document.createElement("h3");
  title.textContent = game.title;
  title.style.margin = "2vh";
  card.appendChild(title);
  const genre = document.createElement("p");
  genre.textContent = game.genre;
  genre.style.margin = "2vh";
  card.appendChild(genre);
  const modalButton = document.createElement("button");
  modalButton.textContent = "More Info";
  modalButton.classList.add("modal-button");
  modalButton.addEventListener("click", function () {
    Modal(game);
  });
  card.appendChild(modalButton);
  container.appendChild(card);
}

function Modal(game) {
  const dialog = document.querySelector(".modal");
  const closebutton = document.querySelector(".closeModal");
  const modalContent = document.querySelector(".modalContent");
  dialog.showModal();
  const title = document.createElement("h3");
  title.textContent = game.title;
  title.style.margin = "2vh";
  modalContent.appendChild(title);
  const img = document.createElement("img");
  img.src = game.thumbnail;
  img.style.width = "40vh";
  img.style.height = "30vh";
  img.style.margin = "2vh";
  modalContent.appendChild(img);
  const description = document.createElement("p");
  description.textContent = game.short_description;
  description.style.margin = "2vh";
  modalContent.appendChild(description);
  const genre = document.createElement("p");
  genre.textContent = game.genre;
  genre.style.margin = "2vh";
  modalContent.appendChild(genre);
  const platformes = document.createElement("p");
  platformes.textContent = game.platform;
  platformes.style.margin = "2vh";
  modalContent.appendChild(platformes);
  closebutton.addEventListener("click", () => {
    modalContent.removeChild(title);
    modalContent.removeChild(img);
    modalContent.removeChild(description);
    modalContent.removeChild(genre);
    modalContent.removeChild(platformes);
    dialog.close();
  });
}
FetchData();
