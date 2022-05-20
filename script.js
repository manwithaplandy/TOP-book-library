let myLibrary = [];
let libDisplay = document.querySelector('.lib-display');

function Book (author, title, pages, read) {
    // Object constructor
    // Author, title, page count, read or not
    this.id = Math.round(Math.random() * 10000);
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    // Add book to myLibrary array
    myLibrary.push(book);
}

function bookModal() {
    // Pop up modal form for book info to be input
}

function removeBook(book) {
    // Remove the book from the array
    const index = myLibrary.indexOf(book);
    if (index > -1) {
        myLibrary.splice(index, 1); // Remove only 1 item
    }
    // Refresh the list
    viewLibrary();
}

function markRead(book) {
    if (book.read != 'read') {
        book.read = 'read';
        let readButton = document.querySelector(`.b-${book.id}-read-button`);
        readButton.textContent = 'Mark Unread';
    } else {
        book.read = 'unread';
        let readButton = document.querySelector(`.b-${book.id}-read-button`);
        readButton.textContent = 'Mark Read';
    }
    let div = document.querySelector(`.b-${book.id}-display`);
    div.innerText = `${book.title} \nby ${book.author} \nLength: ${book.pages} pages long \nRead status: ${book.read}`;
}

function clearLibDisplay() {
    libDisplay.innerHTML = '';
}

function viewLibrary () {
    clearLibDisplay();
    myLibrary.forEach((book) => {
        //Create a parent div to contain the book info and the buttons
        let bigDiv = document.createElement('div');
        // Create a parent div to contain the buttons so they sit side-by-side
        let buttons = document.createElement('div');
        let div = document.createElement('div');
        let readButton = document.createElement('button');
        let removeButton = document.createElement('button');

        // Style main card div, centering everything
        bigDiv.classList = `${book.id}-card border-2 border-slate-600 bg-slate-200 text-center rounded-xl text-xl p-2 flex flex-col gap-3`
        bigDiv.appendChild(div); // Add child div to main book div
        bigDiv.appendChild(buttons); // Add buttons to main book div

        // Style buttons container
        buttons.classList = 'flex gap-3 justify-center'

        // Style buttons, add class for javascript function, append to div
        readButton.classList = `b-${book.id}-read-button rounded-full bg-green-500 px-3 py-2 text-base`
        if (book.read != 'read') { // Set mark read button according to read status
            readButton.textContent = 'Mark Read';
        } else {
            readButton.textContent = 'Mark Unread';
        }
        buttons.appendChild(readButton);
        removeButton.classList = `b-${book.id}-remove-button rounded-full bg-red-500 px-3 py-2 text-base`
        removeButton.textContent = 'Remove'
        buttons.appendChild(removeButton);

        // Create text element, style it, and add it to the display
        div.classList = `b-${book.id}-display`;
        div.innerText = `${book.title} \nby ${book.author} \nLength: ${book.pages} pages long \nRead status: ${book.read}`;
        libDisplay.appendChild(bigDiv);

        // Add event listeners to functions
        readButton.addEventListener('click', () => markRead(book));
        removeButton.addEventListener('click', () => removeBook(book));
    });
}









// Books created for testing
let theHobbit = new Book('Tolkein', 'The Hobbit', '294', 'read');
addBookToLibrary(theHobbit);
let theFellowship = new Book ('Tolkein', 'Fellowship of Ring', '420', 'unread');
addBookToLibrary(theFellowship);

// let book1 = document.createElement('div');
// let shelf = libDisplay.appendChild(book1);
// shelf.className = 'book-display';
// shelf.innerHTML = `${theHobbit.title} by ${theHobbit.author}. ${theHobbit.pages} long, ${theHobbit.read}`;

viewLibrary();