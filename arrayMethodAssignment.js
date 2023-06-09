const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];
//Find a user named 'Jose'
const userName = users.find(user => user.firstName === 'Jose');
console.log(userName.firstName);

//Get an array of all the premium members

const premiumMember = users.filter(user => user.isPremiumMember ===true);
console.log(premiumMember);

//Get an array of all the user last names
const userLastName = users.map(user =>user.lastName);
console.log(userLastName);

//Get an array of the full names who have logged in more than 10 times
const fullNameLoggedMorethanTen = users.filter(user =>user.logins >10).map(user => `${user.firstName}  ${user.lastName}`)
console.log(fullNameLoggedMorethanTen);

//Get the total number of logins for the list of users

const totalNumberOfLogins = users.map(user => user.logins).reduce(function(login, total){
    return total +login;
  },0)
  console.log(totalNumberOfLogins);
