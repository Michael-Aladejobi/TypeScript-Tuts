const names = ["mike", "john", "kate", "sam", "ish"];

const findStudent = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return `Found: ${item}`;
    }
  }
  return `End of list`;
};
console.log(findStudent(names, "john"));
