//https://rickandmortyapi.com/api/episode

/***************  1.2 Web structure  ***************/

/* 1.21 Header : It contains Project Title */

/** HEADER **/
function headerDisplay() {
  let div = document.createElement("div");
  let h2 = document.createElement("H2");
  let txt = document.createTextNode("Rick and Morty API");

  div.classList.add("listItem");
  h2.classList.add("mm");
  div.appendChild(h2);

  h2.appendChild(txt);
  document.body.appendChild(h2);
}
headerDisplay();

/** Episodes **/

function g() {
  const urlEpisodes = "https://rickandmortyapi.com/api/episode";
  fetch(urlEpisodes)
    .then((episode) => episode.json())
    .then((episodeObject) => {
      //  console.log(episodeObject.results);
      chaptersInfo(episodeObject);
      ShowEpisodeInfo(episodeObject);
    });
}

function chaptersInfo(episodeObject) {
  episodeObject.results.forEach((episode) => {
    //console.log(episode.name);
    const root = document.querySelector("#root");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    root.classList.add("root-list");
    ul.classList.add("ul-list");
    root.appendChild(ul);
    ul.appendChild(li);
    li.innerHTML = "<a onclick='ShowEpisodeInfo()'>Episodes</a>";
    //  episode.name + "  " + episode.air_date + " " + episode.episode;
  });
}

function ShowEpisodeInfo(episodeObject) {
  console.log("hiii");
  episodeObject.results.forEach((episode) => {
    console.log(episode.name);
  });
}
g();
