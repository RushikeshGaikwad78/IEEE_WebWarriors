import axios from 'axios';

const baseurl = "http://localhost:3000";

const getAllToDo = (setTodos) => {
    axios
    .get(baseurl)
    .then(({data}) => {
        console.log('data->>',data)
        setTodos(data)
    })
}
const addToDo = (text, settitle , setTodos) =>{
    axios 
    .post(`${baseurl}/save`, {text})
    .then((data) => {
        console.log(data);
        settitle("")
        getAllToDo(setTodos)
    })
}

// const deleteToDo = {text, settitle, setTodos} => {
//     axios
//     .post(`${baseurl}/delete`, {text})
//     .then((data) => {
//         console.log(data);
//         settitle("")
//         getAllToDo(setTodos)
//     })
// }
export {getAllToDo, addToDo}