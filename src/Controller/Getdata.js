const url ="https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
export function Getdata(){
return fetch(url).then(res=>res.json())
}