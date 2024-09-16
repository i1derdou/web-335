// Add new user to the users collection
newUser = {
  "firstName": "Frederic",
  "lastName": "Chopin",
  "employeeId": "1013",
  "email": "fchopin@me.com",
  "dateCreated": new Date()
}

db.users.insertOne(newUser)


// Update Mozart's email address in the users collection
db.users.updateOne(
  { "lastName": "Mozart" }, // Filter to find the user
  { $set: { "email": "mozart@me.com" } } // Update the email field
)

// Display all users. Only show first name, last name and email address
db.users.find(
  {}, // No filter, to retrieve all users
  { "firstName": 1, "lastName": 1, "email": 1, "_id": 0 } // Projection to include firstName, lastName, email, and exclude _id
).pretty()
