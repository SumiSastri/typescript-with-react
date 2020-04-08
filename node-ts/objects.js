// object literal - assign the object to a variable
var _a;
var firstName = "Janet";
var lastName = "Pink";
var person = {
    firstName: firstName,
    lastName: lastName
};
console.log(person.firstName);
console.log(person.lastName);
// if the variable and prop of the object the same, key value pair not needed as it infers the type from the hoisted variable
var firstName1 = "Janice";
var lastName1 = "Purple";
var person1 = {
    firstName1: firstName1,
    lastName1: lastName1
};
console.log(person1.firstName1);
console.log(person1.lastName1);
// object with methods
var studentfName = "";
var studentlName = "";
var student = {
    studentfName: studentfName,
    studentlName: studentlName
};
function createStudentRecord(studentfName, studentlName, age) {
    var studentFullName = studentfName + " " + studentlName;
    return {
        studentfName: studentfName,
        studentlName: studentlName,
        studentFullName: studentFullName,
        isInHighSchool: function () { return age > 14; }
    };
}
var student1 = createStudentRecord("Preethi", "Patel", 8);
console.log(student1.studentfName);
console.log(student1.studentlName);
console.log(student1.studentFullName);
console.log(student1.isInHighSchool());
var student2 = createStudentRecord("Nalini", "Ramseshan", 16);
console.log(student2.studentfName);
console.log(student2.studentlName);
console.log(student2.studentFullName);
console.log(student2.isInHighSchool());
// ES2015 - looks like json notation - prop of teacher has a space and enclosed in quotes, console log in square brackets
var lN = "last name";
var teacher = (_a = {
        "first name": "Scarlet"
    },
    _a[lN] = "o'Hara",
    _a);
console.log(teacher);
console.log(teacher["first name"]);
console.log(teacher[lN]);
