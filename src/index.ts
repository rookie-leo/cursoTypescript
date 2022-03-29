let names: (number | string)[] = [];
names.push("leonardo");
names.push(27);
console.log(names);

let person: object;

person = {
    name: "Leonardo",
    idade: 27
};

//person = []; //Não dá erro

console.log(person);

let person2: {
    name: string;
    idade: number;
};

person2 = {
    name: "Leonardo",
    idade: 27
};

// person2 = []; // apresenta um erro
console.log(person2);