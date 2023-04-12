//creating a constructor function for a person
function Person(firstName,lastName, favoriteColor, favoriteNumber,favoriteFoods){

    this.firstName=firstName;
    this.lastName = lastName;
    this. favoriteColor= favoriteColor;
    this.favoriteNumber= favoriteNumber;
    this.favoriteFoods= favoriteFoods;
    this.family =[];
};
// add a  fulllName function  on a Person prototype 
Person.prototype.fullName = function(){
     return this.firstName + " " + this.lastName;
 
};
// Overwriting the toString method from the Object prototype by creating a toString method for Person
Person.prototype.toString = function() {
    console.log(`Full name: ${this.fullName()}, Favorite color: ${this.favoriteColor},Favorite number: ${this.favoriteNumber}, Favorite Food: ${this.favoriteFoods}, Family member: ${this.addToFamily()}`);
};
// I  already added an empty array of family in a constructor function for a person.
//Otherwise we could add it over here, Person.family=[];

//add an object to family if it is constructed from Person constuctor and not duplicate.Then return how many member
Person.prototype.addToFamily = function(member){
    if(member instanceof Person && !this.family.includes(member)){
        this.family.push(member);
    }
    return this.family.length;
}
//creating new instance
const  person1 = new Person("Bethel","Neg", "Black", 13,["Pizza","Fish"]);
const  person2 = new Person("Saba","Neg", "Blue", 8, ["Stake","Salad"]);
//add person1 to person2
person2.addToFamily(person1);
//add person2 to person1
person1.addToFamily(person2);
//checking if it takes an object which is not constructed from  Person constructor
let person3 = 'work'
person2.addToFamily(person3);
//check if it adds duplicate
person2.addToFamily(person1);
person1.toString()
person2.toString()



