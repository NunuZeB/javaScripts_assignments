// Get the header 
const theHeader = document.getElementsByTagName("header");
console.log(theHeader);
// Get all the section elements
const allSection= document.getElementsByTagName("section");
console.log(allSection);
// Get the section element with class="current"
//const currentSection = document.getElementsByClassName("current");
 const currentSection =document.querySelector('section.current')
 console.log(currentSection);

// Get the section that comes after the current section
 const nextSection = currentSection.nextElementSibling;
 console.log(nextSection);
// Get the h2 node from the section before the 'current' section
const h2Node = currentSection.previousElementSibling.getElementsByTagName("h2")
console.log(h2Node);
// Get the div that contains the section that has an h2 with a class of 'highlight'
const divWithHighlight = currentSection.parentElement;
console.log(divWithHighlight);
// Get all the sections that contain an H2 (using a single statement);
const allSectionWithH2 = document.querySelectorAll('section h2');
console.log(allSectionWithH2)


 