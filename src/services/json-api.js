
export function getAllPhotos() {
    // return await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=25')
    // .then(response => response.json())
    // .then(json => console.log(json))
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=25")
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

//   const STARSHIP_ENDPOINT = 'https://swapi.dev/api/starships/'

//   export function getAllStarships() {
//     return fetch(STARSHIP_ENDPOINT)
//       .then((res) => res.json())
//       .then((json) => json.results)
//   }