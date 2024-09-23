# clemens_usersp1.py
# Author: David Clemens
# Date: 2024-09-22
# Description: Python script to connect to the MongoDB web335DB database and perform queries on the users collection

from pymongo import MongoClient

# Connect to MongoDB (ensure MongoDB is running locally or remotely and the connection URI is correct)
client = MongoClient("mongodb://localhost:27017/")  # Update the URI if necessary

# Connect to the web335DB database
db = client['web335DB']

# Connect to the users collection
users = db['users']

# Display all documents in the users collection
def display_all_documents():
    print("\nDisplaying all documents in the users collection:")
    for user in users.find():
        print(user)

# Display a document where employeeId is 1011
def display_employee_by_id(employee_id):
    print(f"\nDisplaying the document with employeeId {employee_id}:")
    user = users.find_one({"employeeId": str(employee_id)})  # Convert employee_id to string
    if user:
        print(user)
    else:
        print(f"No user found with employeeId {employee_id}")

# Display a document where lastName is 'Mozart'
def display_user_by_last_name(last_name):
    print(f"\nDisplaying the document with lastName {last_name}:")
    user = users.find_one({"lastName": last_name})
    if user:
        print(user)
    else:
        print(f"No user found with lastName {last_name}")

# Main program execution
if __name__ == "__main__":
    # Display all documents
    display_all_documents()

    # Display document with employeeId 1011
    display_employee_by_id(1011)

    # Display document with lastName 'Mozart'
    display_user_by_last_name('Mozart')