// Update the 'Apples' item to say 'Granny Smith Apples'
const myList = document.getElementById('list');
myList.childNodes[3].innerHTML = "Grany Smith Apples";
//console.log(myList.childNodes);

//const UnordeList = document.querySelector('ul');

// Remove 'Oat Milk' from the list
myList.childNodes[7].remove();

// Add an item 'Kombucha'
const newList = document.createElement('li');
newList.innerHTML = "Kombucha";
myList.append(newList);

// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
myList.innerHTML = "";
let newarr = ['protein bars', 'almonds', 'peanut butter'];
newarr.map(
    items => {
        let listItems = document.createElement('li');
        listItems.innerHTML = items
        myList.append(listItems);

    }
)

// Add the class 'important' to the almonds item.
let almond = myList.childNodes[1]
almond.classList.add('important');
console.log(almond)