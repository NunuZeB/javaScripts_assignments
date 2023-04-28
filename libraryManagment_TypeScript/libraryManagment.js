let books = [
    {
        id: 1,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        published: new Date('1951-07-16'),
        available: true
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published: new Date('1960-07-11'),
        available: true
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        published: new Date('1949-06-08'),
        available: false
    }
];
function addBook(book) {
    books.push(book);
}
function findBookById(id) {
    return books.find(function (book) { return book.id === id; });
}
function updateBook(book) {
    let index = books.findIndex(function (b) { return b.id === book.id; });
    if (index !== -1) {
        books[index] = book;
        return true;
    }
    return false;
}
function removeBook(id) {
    let index = books.findIndex(function(book) {return book.id === id; });
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
}
// Test the functions 
console.log(books);
// Add a new book
let newBook = {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    published: new Date('1925-04-10'),
    available: true
};
addBook(newBook);
console.log(books);
// Find a book by id
let book = findBookById(2);
 console.log(book); 
 // Update a book
let updatedBook = {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    published: new Date('1960-07-11'),
    available: false
 };
 updateBook(updatedBook);
 console.log(books);
// Remove a book
 removeBook(3);
console.log(books);
