const axiom = require('axiom');

const baseurl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
    axios
    .get(baseurl)
    .then(({data}) => {
        console.log('data->>',data)
        setToDo(data)
    })
}

export {getAllToDo}