// Boklista (med nya böcker)
let books = [
    { title: "Harry Potter", author: "J.K. Rowling", isbn: "978-91-1-654321-0" },
    { title: "Star Wars", author: "George Lucas", isbn: "978-91-1-987654-3" },
    { title: "Scooby-Doo", author: "Hanna-Barbera", isbn: "978-91-1-112233-4" }
];

// Funktion för att rendera boklistan i tabellen
function displayBooks() {
    const booksTable = document.getElementById('booksTable');
    booksTable.innerHTML = ''; // Töm tabellen först

    books.forEach(book => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        `;
        booksTable.appendChild(row);
    });
}

// Lägg till en ny bok
document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Hämta värden från formuläret
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    // Lägg till den nya boken i listan
    books.push({ title, author, isbn });

    // Återställ formuläret
    this.reset();

    // Uppdatera boklistan
    displayBooks();
});

// Funktion för att söka efter en specifik bok
document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResult = document.getElementById('searchResult');

    // Rensa tidigare resultat
    searchResult.innerHTML = '';

    // Sök efter bok baserat på titel eller ISBN
    const foundBook = books.find(book => 
        book.title.toLowerCase().includes(searchInput) || 
        book.isbn.includes(searchInput)
    );

    // Visa resultatet
    if (foundBook) {
        searchResult.innerHTML = `
            <h3>Bok hittad:</h3>
            <p><strong>Titel:</strong> ${foundBook.title}</p>
            <p><strong>Författare:</strong> ${foundBook.author}</p>
            <p><strong>ISBN:</strong> ${foundBook.isbn}</p>
        `;
    } else {
        searchResult.innerHTML = `<p>Ingen bok hittad med den sökningen.</p>`;
    }
});

// Initialt visa alla böcker när sidan laddas
window.onload = displayBooks;
