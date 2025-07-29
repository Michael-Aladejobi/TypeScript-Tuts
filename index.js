const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const O2 = (arrX, arrY) => {
  for (let i = 0; i < arrX.length; i++) {
    for (let j = 0; j < arrY.length; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};

const res = O2(arr1, arr2);

// const data = ["john", "kate", "smith", "tope", "mike"];

// const fetchStudent = (arr, item) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return `Found ${item.toUpperCase()} in (row: (${i + 1})) `;
//     }
//   }
// };

// const smith = fetchStudent(data, "smith");
// console.log(smith);

// BIG 0

// 0(1)
// const numbers = [1, 2, 3, 4, 5];
// const getElement = (arr, index) => {
//   return arr[index];
// };

// const res = getElement(numbers, 0);
// console.log(res);

// 0(N x N)
