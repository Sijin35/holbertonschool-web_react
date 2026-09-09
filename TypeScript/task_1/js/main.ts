interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract?: boolean;
    [property: string]: any;
}

const teacher1: Teacher = {
    firstName: "John",
    lastName: "Cena",
    fullTimeEmployee: true,
    yearsOfExperience: 2,
    location: "Melb",
    contract: true,
    age: 25,
};

console.log(teacher1);

interface Director extends Teacher {
    numberOfReports: number;
}

const director1: Teacher = {
    firstName: "Jane",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 6,
    location: "Melb",
    contract: true,
    age: 35,
    numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = ((firstName: string, lastName: string): string => {
    const f_name: string = firstName.slice(0, 1);
    return (`${f_name}. ${lastName}`);
})

console.log(printTeacher(teacher1.firstName, teacher1.lastName));

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return ('Currently Working');
    }

    displayName(): string {
        return this.firstName;
    }
}