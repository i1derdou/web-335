# clemens_usersp2.py
# Author: David Clemens
# Date: 2024-09-29
# Description: Program to create, update, and delete a user document in the MongoDB web335DB database.

# Import the MongoClient
from pymongo import MongoClient
import datetime

# Build a connection string to connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")

# Configure a variable to access the web335DB
db = client['web335DB']

# 1. Create a new user document
user = {
    "firstName": "David",
    "lastName": "Clemens",
    "employeeId": "1014",
    "email": "dclemens@me.com",
    "dateCreated": datetime.datetime.utcnow()
}

# Insert the document into the users collection
user_id = db.users.insert_one(user).inserted_id
print(f"User created with ID: {user_id}")

# Prove the document was created by searching the collection
created_user = db.users.find_one({"employeeId": "1014"})
print("Created User Document:", created_user)

# 2. Update the email address of the document created in step 1
db.users.update_one(
    {"employeeId": "1014"},
    {
        "$set": {
            "email": "david.clemens@me.com"
        }
    }
)

# Prove the document was updated by searching the collection
updated_user = db.users.find_one({"employeeId": "1014"})
print("Updated User Document:", updated_user)

# 3. Delete the document created in step 1
result = db.users.delete_one({"employeeId": "1014"})
print(f"Deleted {result.deleted_count} document(s)")

# Prove the document was deleted by searching the collection
deleted_user = db.users.find_one({"employeeId": "1014"})
print("Deleted User Document:", deleted_user)