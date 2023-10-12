// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log("Walking east one step");
//   }


//   let ray = {
//     hello: blue,
//     top: yello,
//     purple: true,
//   }
  
// console.log(ray.hello)
 let arr = [1, 2, 3, 4, 5, 6, 7]
const map =(arr,mapFunc) => {
  const mapArr = [];
  for(let i = 0; i < arr.length; i++){
    const result = mapFunc(arr[i]);
    mapArr.push(result)
  }
  return mapArr;
}

const squareArr = map(arr, (num) => num ** 5);
console.log(squareArr)




let arr2 = [1, 2, 3, 4, 5, 6 , 7,]
// arr2 is a array 
const map2 =(arr2, mapFunc2) => {
  // made a arrow function with a varaible named map2 and two params called arr2 and mapFunc
  const mapArr2 = [];
  // created a variable called mapArr2 that is a empty array(cause thats where we are gonna put the array that we return from the function)
  for(let i = 0; i < arr2.length; i++) {
    // simple for loop(with index starts at zero/The index loops over the array by its length/The itartor goes up)
    const result2  = mapFunc2(arr2[i]);
    // created a variable called mapFunc2 with the params of the arr2 index
    mapArr2.push(result2)
//     the empty array mapArr2.Appends new elements to the end of an array, and returns the new length of the array with the params results2
// 
 }
 return mapArr2
}

const squareArr2 = map2(arr,(num2) => num2 ** 2);
console.log(squareArr2)