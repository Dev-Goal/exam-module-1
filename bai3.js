function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i++) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
function findPrime(arr) {
  let primeArray = [];
  for (let number of arr) {
    if (isPrime(number)) {
      primeArray.push(number);
      primeArray.sort((a, b) => a - b);
    }
  }
  return primeArray;
}
let numbers = [1, 5, 6, 23, 8, 47, 10, 3];
let primeNumbers = findPrime(numbers);
console.log("Các số nguyên tố trong mảng là:", primeNumbers);
