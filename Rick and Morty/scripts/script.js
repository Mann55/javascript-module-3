// getting root div
const rootDiv = document.getElementById("root");

// creating divs
const asideDiv = document.createElement("div");
const contentDiv = document.createElement("div");
const mainDiv = document.createElement("div");

// creating classes
asideDiv.classList.add("aside");
contentDiv.classList.add("content");
mainDiv.classList.add("main");

// creating button to load more episodes
const loadMoreEpisodesBtn = document.createElement("button");
loadMoreEpisodesBtn.textContent = "Load More Episodes";
asideDiv.appendChild(loadMoreEpisodesBtn);

// appending divs
mainDiv.appendChild(asideDiv);
mainDiv.appendChild(contentDiv);
rootDiv.appendChild(mainDiv);

// fething data from api
let urlEpisodes = "https://rickandmortyapi.com/api/episode";

// function to load episodes
const loadEpisodes = async () => {
  const response = await fetch(urlEpisodes);
  const data = await response.json();
  //console.log(data.info.next);
  //console.log(data.results);
  urlEpisodes = data.info.next;
  showEpisodes(data.results);
};

// function to load more episodes
const showEpisodes = (data) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    //console.log(data[i].episode);
    const btn = document.createElement("button");
    btn.textContent = data[i].episode;
    // creating add event listener for get more details baout episodes
    btn.addEventListener("click", () => {
      printEpisodeContent(data[i]);
    });
    fragment.appendChild(btn);
  }
  asideDiv.appendChild(fragment);
};

// function to create the content of episodes
const printEpisodeContent = (data) => {
  //  console.log(data.name);
  const episodeDataFragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.textContent = data.name;
  const date = document.createElement("p");
  date.textContent = data.air_date;

  episodeDataFragment.appendChild(title);
  episodeDataFragment.appendChild(date);

  contentDiv.innerHTML = "";
  contentDiv.appendChild(episodeDataFragment);

  episodeCards(data);
};

// card to show the data of episodes characters
const episodeCards = async (data) => {
  //console.log(data);
  const characters = data.characters;
  //console.log(characters);
  const wrapperCards = document.createElement("div");
  wrapperCards.classList.add("cards");
  for (let i = 0; i < characters.length; i++) {
    const response = await fetch(characters[i]);
    const charactersData = await response.json();
    console.log(charactersData);

    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.classList.add("card-image");
    image.src = charactersData.image;
    const name = document.createElement("p");
    name.textContent = charactersData.name;
    card.appendChild(image);
    card.appendChild(name);
    wrapperCards.appendChild(card);
  }
  contentDiv.appendChild(wrapperCards);
};

window.addEventListener("DOMContentLoaded", loadEpisodes);
loadMoreEpisodesBtn.addEventListener("click", loadEpisodes);
