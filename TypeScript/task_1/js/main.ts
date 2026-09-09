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
