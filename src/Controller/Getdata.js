export function getData(name){
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`).then(res=>res.json())
  }

