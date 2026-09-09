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