/* Write a function that gives a sorted array of integers and a number. 
Find if there’s any pair in the array that has an average of the given number. Find all of them. 
There might be multiple pairs that fit the condition. */

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

// O^2
// function averagePair(arr, avg) {
//   let result = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if ((arr[i] + arr[j]) / 2 === avg) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   console.log(result);
//   return result;
// }

// O(n)

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let temp = [];
  while (left < right) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg === avg) {
      temp.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }
  console.log(temp);
  return temp;
}
