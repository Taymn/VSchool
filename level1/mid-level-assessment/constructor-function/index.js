class Book {
    // parameters
    constructor(title, author, year){
    this.title= title;
    this.author= author;
    this.year= year;
    }
    // method
    getDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Year: ${this.year}`);
        console.log(`Author: ${this.author}`);
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
book1.getDetails(); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
book2.getDetails(); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960