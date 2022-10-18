//https://rickandmortyapi.com/api/episode

/***** Fetching data from the api *****/
const url = "https://rickandmortyapi.com/api/episode";
fetch(url)
  .then((episode) => episode.json())
  .then((episodeObject) => {
    console.log(episodeObject.results);
    chaptersInfo(episodeObject);
    charactersInfo(episodeObject);
  });

/***** 1.1.1 : In this section you will obtain information about the chapters of Rick and Morty: *****/
function chaptersInfo(episodeObject) {
  episodeObject.results.forEach((episode) => {
    //console.log(episode.name);
    const root = document.querySelector("#root");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      episode.name + "  " + episode.air_date + " " + episode.episode;
    root.appendChild(ul);
  });
}

/***** 1.1.2: In this section you will obtain information about the characters of Rick and Morty: *****/
function charactersInfo(episodeObject) {
  episodeObject.results.forEach((c) => {
    console.log(c.characters);
  });
}
