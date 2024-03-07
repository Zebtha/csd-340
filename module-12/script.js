/* 
    Shane Tinsley - : Assignment 12.2 -3/7/24 
    Creates array and events for Tinsley_Mod12_2.html
    Resources: Textbook HTML & CSS design and build websites 
    https://github.com/Zebtha/csd-340.git
    https://zebtha.github.io/csd-340/
    https://zebtha.github.io/csd-340/module-11/Tinsley_Mod11_2.html
*/// script.js
const originalBooksArray = [
    "Wicked: The Life And Times of the Wicked Witch of the West",
    "Interview With the Vampire",
    "Murder of Roger Ackroyd, The",
    "Magician's Nephew, The",
    "Crooked House",
    "What I Was Doing While You Were Breeding",
    "Wizard's First Rule",
    "Odyssey of Homer",
    "Harry Potter: The Complete Works",
    "Diva Rules, The"
];

function sortAscendingBooks() {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    originalBooksArray.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book;
        li.value = index + 1;
        booksList.appendChild(li);
    });
}

function sortDescendingBooks() {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    const reversedBooksArray = originalBooksArray.slice().reverse();

    const totalBooks = reversedBooksArray.length;
    reversedBooksArray.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book;
        li.value = totalBooks - index;
        booksList.appendChild(li);
    });
}

// Initialize list with original order
sortAscendingBooks();
