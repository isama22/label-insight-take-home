export async function getAllPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos/?_limit=25')
    .then(response => response.json())
    .then(json => console.log(json))
  }

