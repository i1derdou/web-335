/**
 * Title: combined_queries.js
 * Description: MongoDB queries for interacting with students and houses collections.
 */

// a. Display all students.
console.log("Displaying all students:");
db.students.find().pretty();

/**
 * b. Add a new student to the students collection.
 * We're adding a student named Hermione Granger to Gryffindor house (houseId: h1007).
 */
console.log("Adding a new student:");
newStudent = {
    "firstName": "Hermione",
    "lastName": "Granger",
    "studentId": "s1019",
    "houseId": "h1007"  // Gryffindor
};
db.students.insertOne(newStudent);

/**
 * Prove that the new student was added successfully by displaying the student with studentId s1019.
 */
console.log("Proving the new student was added:");
db.students.find({ studentId: "s1019" }).pretty();

/**
 * c. Update the last name of the student added in step b (Hermione Granger to Hermione Weasley-Granger).
 */
console.log("Updating the last name of the new student:");
db.students.updateOne(
    { studentId: "s1019" },
    { $set: { lastName: "Weasley-Granger" } }
);

/**
 * Prove that the student's last name was updated successfully by querying the updated student.
 */
console.log("Proving the student's last name was updated:");
db.students.find({ studentId: "s1019" }).pretty();

/**
 * d. Delete the student created in step b.
 */
console.log("Deleting the new student:");
db.students.deleteOne({ studentId: "s1019" });

/**
 * Prove that the student was deleted successfully by trying to find the student with studentId s1019.
 */
console.log("Proving the student was removed:");
db.students.find({ studentId: "s1019" }).pretty();

/**
 * e. Display all students by house.
 * Use aggregation to display students grouped by their houses.
 */
console.log("Displaying all students by house:");
db.houses.aggregate([
    {
        $lookup: {
            from: "students",
            localField: "houseId",
            foreignField: "houseId",
            as: "students"
        }
    },
    {
        $project: {
            _id: 0,
            "House": "$founder",
            "Mascot": "$mascot",
            "Students": "$students"
        }
    }
]).forEach(doc => printjson(doc));

/**
 * f. Display all students in house GryDindor (Godric Gryffindor's house).
 */
console.log("Displaying all students in GryDindor:");
db.houses.aggregate([
    {
        $match: { "founder": "Godric Gryffindor" }
    },
    {
        $lookup: {
            from: "students",
            localField: "houseId",
            foreignField: "houseId",
            as: "students"
        }
    },
    {
        $project: {
            _id: 0,
            "House": "$founder",
            "Students": "$students"
        }
    }
]).forEach(doc => printjson(doc));

/**
 * g. Display all students in the house with an Eagle mascot (Ravenclaw).
 */
console.log("Displaying all students in the house with an Eagle mascot:");
db.houses.aggregate([
    {
        $match: { "mascot": "Eagle" }
    },
    {
        $lookup: {
            from: "students",
            localField: "houseId",
            foreignField: "houseId",
            as: "students"
        }
    },
    {
        $project: {
            _id: 0,
            "House": "$founder",
            "Students": "$students"
        }
    }
]).forEach(doc => printjson(doc));