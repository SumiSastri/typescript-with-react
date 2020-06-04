// Each object has static properties with a type and value
var _a;
// ES2015 - bracket notation - more verbose, useful in certain circumstances 
// example is when the value has spaces or dashes between one element and the other
var fN = "first name";
var lN = "last name";
var teacher = (_a = {
        "first name": "Scarlet"
    },
    _a[lN] = "o'Hara",
    _a);
console.log(teacher, "LOG: teacher as object literal");
console.log(teacher["first name"], "LOG teacher[\"first name]");
console.log(teacher[fN], "LOG teacher[fN] ");
console.log(teacher[lN], "LOG teacher [lN]");
//  Object literal to create a new object you have to create a new object person1 as objects are unique
// object with values
var person = {
    firstName: "Danny",
    lastName: "Green"
};
// object with typescript
var firstName = "Janet";
var lastName = "Pink";
var person1 = {
    firstName: firstName,
    lastName: lastName
};
console.log(person1.firstName, "LOG: person.firstName returns prop");
console.log(person1, "LOG: person1 as object literal");
console.log(person, "LOG: person as object literal");
// if the type name and the property name are the same, the prop type does not need to be re-declared 
function createCircle(radius) {
    return {
        radius: radius,
        calcCircumference: function () {
            return radius * radius;
        }
    };
}
var circle0 = createCircle(45);
console.log(circle0, "logs radius set to 45 in new vairable circle0 for factory function createCircle");
console.log(circle0.calcCircumference(), "logs method to calc circumference of circle0");
// Nested objects, draw is a method that contains logic not a value it is not technically a prop 
var circle = {
    radius: 1.344,
    location: {
        x: 100,
        y: 1
    },
    draw: function () {
        return this.radius * this.location.x;
    }
};
console.log(circle.draw(), "logs nested object circle.draw method returns logic");
// Factory functions allow you to duplicate objects with their props and methods
function createStudentRecord(studentfName, studentlName, age) {
    var studentFullName = studentfName + " " + studentlName;
    return {
        studentfName: studentfName,
        studentlName: studentlName,
        studentFullName: studentFullName,
        isInHighSchool: function () { return age > 14; }
    };
}
// Factory function inheritance
var student1 = createStudentRecord("Preethi", "Patel", 8);
console.log(student1, "logs student1 with Preethi Patel values");
console.log(student1.studentfName, "logs student1 first name");
console.log(student1.studentlName, "logs student1 last name");
console.log(student1.studentFullName, "logs the method that returns student1 full name");
console.log(student1.isInHighSchool(), "logs the method to check if student1 is in high school");
var student2 = createStudentRecord("Nalini", "Ramseshan", 16);
console.log(student2, "logs Nalini Ramaseshan's values as student 2 object with all the inherited methods");
console.log(student2.studentfName, "logs inherited first name property");
console.log(student2.studentlName, "logs inherited last name property");
console.log(student2.studentFullName, "logs inherited method creating full name");
console.log(student2.isInHighSchool(), "logs inherited method checking if student is in high school");
// deleting props or methods
function createTeacherRecord(teacherFN, teacherLN, teacherGrade) {
    var greetTeacher = "Good morning " + teacherFN + " " + teacherLN;
    return {
        teacherFN: teacherFN,
        teacherLN: teacherLN,
        greetTeacher: greetTeacher,
        isHighSchoolTeacher: function () { return teacherGrade > 7; }
    };
}
var teacher1 = createTeacherRecord('Mona', 'Rick', 10);
console.log(teacher1, "logs object teacher1 after instantiation");
delete teacher1.teacherLN;
delete teacher1['teacherFN'];
console.log(teacher1.teacherFN, "logs deleted teacher 1 first name as undefined");
