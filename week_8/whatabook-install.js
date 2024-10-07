// Function to check if WhatABook database exists
var databaseExists = false;

// List all existing databases
var databases = db.adminCommand({ listDatabases: 1 }).databases;

// Iterate over the database list to check for WhatABook
databases.forEach(function(database) {
    if (database.name === "WhatABook") {
        databaseExists = true;
    }
});

if (databaseExists) {
    print("The WhatABook database already exists. Proceeding to drop the database and collections...");

    // Switch to WhatABook and drop the database
    db = db.getSiblingDB('WhatABook');
    db.dropDatabase();
    print("WhatABook database has been dropped.");
} else {
    print("WhatABook database does not exist. Proceeding with fresh installation...");
}

// Create or switch to the WhatABook database
db = db.getSiblingDB('WhatABook');
print("WhatABook database created or switched to.");

// Now proceed with installation

// Drop collections if they exist (just in case)
db.users.drop();
db.books.drop();
db.wishlists.drop();
db.wishlist_book.drop();

// Create the Users collection
db.createCollection("users");

// Insert some sample users into the Users collection
db.users.insertMany([
    {
        "_id": ObjectId(),
        "first_name": "Emma",
        "last_name": "Carter",
        "email": "emma.carter@example.com",
        "password": "hashed_password"
    },
    {
        "_id": ObjectId(),
        "first_name": "Mark",
        "last_name": "Johnson",
        "email": "mark.johnson@example.com",
        "password": "hashed_password"
    }
]);

// Create the Books collection
db.createCollection("books");

// Insert some sample books into the Books collection
db.books.insertMany([
    {
        "_id": ObjectId(),
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "isbn": "9780743273565",
        "published_date": ISODate("1925-04-10"),
        "price": 10.99
    },
    {
        "_id": ObjectId(),
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian",
        "isbn": "9780451524935",
        "published_date": ISODate("1949-06-08"),
        "price": 15.99
    }
]);

// Create the Wishlists collection
db.createCollection("wishlists");

// Insert some sample wishlists into the Wishlists collection
db.wishlists.insertMany([
    {
        "_id": ObjectId(),
        "wishlist_name": "Emma's Wishlist",
        "user_id": db.users.findOne({"first_name": "Emma"})._id,
        "creation_date": ISODate("2024-10-06")
    },
    {
        "_id": ObjectId(),
        "wishlist_name": "Mark's Wishlist",
        "user_id": db.users.findOne({"first_name": "Mark"})._id,
        "creation_date": ISODate("2024-10-06")
    }
]);

// Create the Wishlist_Book collection to represent the many-to-many relationship
db.createCollection("wishlist_book");

// Insert sample data into Wishlist_Book collection
db.wishlist_book.insertMany([
    {
        "_id": ObjectId(),
        "wishlist_id": db.wishlists.findOne({"wishlist_name": "Emma's Wishlist"})._id,
        "book_id": db.books.findOne({"title": "The Great Gatsby"})._id,
        "date_added": ISODate("2024-10-06")
    },
    {
        "_id": ObjectId(),
        "wishlist_id": db.wishlists.findOne({"wishlist_name": "Mark's Wishlist"})._id,
        "book_id": db.books.findOne({"title": "1984"})._id,
        "date_added": ISODate("2024-10-06")
    }
]);

// Output a confirmation message
print("WhatABook database setup complete with Users, Books, Wishlists, and Wishlist_Book collections.");