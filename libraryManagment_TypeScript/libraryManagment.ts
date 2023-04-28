interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
  }
  
  const books: Book[] = [
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
  
  function addBook(book: Book): void {
    books.push(book);
  }
  
  function findBookById(id: number): Book | undefined {
    return books.find(book => book.id === id);
  }
  
  function updateBook(book: Book): boolean {
    const index = books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      books[index] = book;
      return true;
    }
    return false;
  }
  
  function removeBook(id: number): boolean {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }
  
  // Test the functions
  //console.log(books);
  
  // Add a new book
  const newBook: Book = {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    published: new Date('1925-04-10'),
    available: true
  };
  addBook(newBook);
  console.log(books);
  
  // Find a book by id
  const book = findBookById(2);
  console.log(book);
  
  // Update a book
  const updatedBook: Book = {
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