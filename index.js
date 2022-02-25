// Add your code here
function submitData(nameArg, emailArg) {

    const formData = {

        name: nameArg,
        email: emailArg,

    }

    const configObject = {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),

    };
    
    return fetch('http://localhost:3000/users', configObject)
            .then(response => response.json())
            .then(data => document.body.append(data.id))
            .catch(error => document.body.append(error));
}

// const configurationObject = {
//     method: "POST",
//     headers: { 
//         "Content-Type": "application/json", // We send this type of data to the server.
//         Accept: "application/json", // We accept this type of data from the server.
//     },
//     body: JSON.stringify({ // Body context must be string, use 'JSON.stringify' <- JS built-in method.
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// };

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(response => response.json()) // json() -> Converts the body of the response from JSON to POSO (Plain Old JS Object).
//     .then(data => console.log(data))
//     .catch(console.error('fetch data not found!'));



// fetch('http://localhost:3000/dogs/6', { // DELETE http method
//     method: "DELETE",
// })
// .then(response => response.json()) // json() -> Converts the body of the response from JSON to POSO (Plain Old JS Object).
// .then(data => console.log(data))


// OR by using anonymous object as the second argument to fetch().
// fetch('http://localhost:3000/dogs', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// })
