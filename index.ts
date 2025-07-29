// // Strings
// let myName: string = "Mike";
// myName = "some other person";
// console.log(myName);

// // Numbers
// let favNumber: number = 8;
// console.log(favNumber);

// // Boolean
// let isAlive: boolean = true
// console.log(isAlive)

// let tech = "TypeScript";
// // tech = 12 //Error
// console.log(typeof tech);

// let color: any = "TypeScript";
// color = 12;
// color = true;
// console.log(typeof color);

// Regular Function

// function addOne(num: number) {
//   return num + 1;
// }

// console.log(addOne(3));

// // Arrow Function
// const double = (x: number, y: number) => {
//   return x * y;
// };
// console.log(double(2, 2));

// function greet(person: string = "Anonymous") {
//   return ` Hello, ${person}!`;
// }

// console.log(greet());
// console.log(greet("Mike"));

// function printMessage(message: string) : void {
//   console.log(`This is my mesage => "${message}!"`);
// }

// printMessage("Hello There");

// ARRAYS

// const numbers: number[] = [1, 2, 3, 4, 5, ];
// console.log(numbers);

// const singleDi: number[] = [1, 2, 3, 4, 5];
// const multiDi: number[][] = [[1, 2, 3, 4, 5]];
// const tripleDi: number[][][] = [[[1, 2, 3, 4, 5]]];

// console.log(singleDi);
// console.log(multiDi);
// console.log(tripleDi);

// function printUser(): { name: string; age: number; location: string } {
//   return {
//     name: "mike",
//     age: 10,
//     location: "..bla",
//   };
// }

// const res = printUser();
// console.log(res);

//Function
// function printUser(name: string, age: number, location: string) {
//   return {
//     name,
//     age,
//     location,
//   };
// }

// const res = printUser("mike", 10, "..bla");
// console.log(res);

// type User = {
//   name: string;
//   age: number;
//   location?: string ;
// };

// const printUserInfo = (user: User) => {
//   return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
// };

// const res = printUserInfo({ name: "mike", age: 2, location: "...blah" });
// console.log(res);

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   id: number;
//   title: string;
// };

// type PersonAndEmployee = Person & Employee;

// const mike: PersonAndEmployee = {
//   name: "mike",
//   age: 30,
//   id: 123,
//   title: "...blah",
// };

// const res = mike;
// console.log(res);

let password: number | string = 10;

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  email: "someting@gmail.com",
  password: "passw234",
};

const items: (number | string)[] = [1, 2, 3, 4, "hello"];
console.log(items);
