const getUsers = () => {
    console.log('getting user information ...');
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json));
}
