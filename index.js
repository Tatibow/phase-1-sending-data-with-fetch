


function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(response => response.json())
    .then(userData => document.body.append(userData.id))
    .catch(error => document.body.append(error.message))
}
















// function submitData(name, email) {
//     return fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//         })
//     })
//         .then(response => response.json())
//         .then(userData => document.body.append(userData.id))
//         .catch(error => document.body.append(error.message));
// }
