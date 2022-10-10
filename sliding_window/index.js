maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  let max_value = 0;
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
  return max_value;
}

function improveMax(arr, size) {
  let max_value = 0;
  for (let i = 0; i < size; i++) {
    max_value += arr[i];
  }
  let tempValue = max_value;

  for (let i = size; i < arr.length; i++) {
    tempValue = tempValue + arr[i] - arr[i - size];

    if (tempValue > max_value) {
      max_value = tempValue;
    }
  }
  console.log(max_value);
  return max_value;
}
function minSum(arr, size) {
  let minValue = 0;

  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }

  let tempValue = minValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue < minValue) {
      minValue = tempValue;
    }
  }
  console.log("minValue", minValue);
  return minValue;
}
