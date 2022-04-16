const axios = require('axios');

const userUrl = "'https://jsonplaceholder.typicode.com/users";
axios
    .get(userUrl)
    .then((response) => {
        console.log(response.name)
    })
    .catch((error) => {
        console.log(error.message)
    })