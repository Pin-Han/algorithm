maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  let max_value = -Infinity;
  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attemp = 0;

    for (let j = i; j < i + size; j++) {
      attemp += arr[j];
    }
    if (attemp > max_value) {
      max_value = attemp;
    }
  }
  console.log(max_value);
  return max_value;
}

function minSum(arr, size) {}
