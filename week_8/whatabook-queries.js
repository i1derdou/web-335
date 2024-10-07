// List all books
db.books.find({}, { title: 1, author: 1, genre: 1, isbn: 1, price: 1, _id: 0 });

// Display List Books By Genre
db.books.find({ genre: "Classic" }, { title: 1, author: 1, genre: 1, isbn: 1, price: 1, _id: 0 });

// Display List of Books By Author
db.books.find({ author: "George Orwell" }, { title: 1, author: 1, genre: 1, isbn: 1, price: 1, _id: 0 });

// Display Book By ID
db.books.findOne({ _id: ObjectId("6703564d18a479d8939d771a") }, { title: 1, author: 1, genre: 1, isbn: 1, price: 1, _id: 0 });