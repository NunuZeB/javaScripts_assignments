//Create an array of user objects 
const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Mary', email: 'mary@example.com' },
    { id: 3, name: 'David', email: 'david@example.com' }
  ];
  //function to fetch the user with ID
  function fetchUserById(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(user => user.id === userId);
        if (user) {
          resolve(user);
        } else {
          reject(`User with ID ${userId} not found`);
        }
      }, 1000);
    });
  }
  //function to fetch the user with ID 1 and
  // chain another fetchUserById call to fetch the user with ID 2
  fetchUserById(1)
    .then(user => console.log(user))
    .catch(error => console.log(error));
  
  fetchUserById(2)
    .then(user => console.log(user))
    .catch(error => console.log(error));
 