var users = [
    { id: 1, name: 'David', email: 'david@example.com' },
    { id: 2, name: 'Saba', email: 'saba@example.com' },
    { id: 3, name: 'Biruk', email: 'biruk@example.com' }
];
//function to fetch the user with ID
function fetchUserById(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var user = users.find(function (user) { return user.id === userId; });
            if (user) {
                resolve(user);
            }
            else {
                reject("User with ID ".concat(userId, " not found"));
            }
        }, 1000);
    });
}
//function to fetch the user with ID 1 and
// chain another fetchUserById call to fetch the user with ID 2
fetchUserById(1)
    .then(function (user) { return console.log(user); })
    .catch(function (error) { return console.log(error); });
fetchUserById(2)
    .then(function (user) { return console.log(user); })
    .catch(function (error) { return console.log(error); });
