let arr = [];
let arrLength;
while (true) {
  arrLength = Number(prompt("Nhập vào số lượng của mảng."));
  if (Number.isInteger(arrLength) && arrLength > 0) {
    break;
  }
}
for (let i = 0; i < arrLength; i++) {
  let input = Number(prompt(`Mời nhập vào phần tử thứ ${i + 1}`));
  arr.push(input);
}
let totalEven = 0;
let totalOdd = 0;
let signalOfTotal = 0;
for (let i = 0; i < arrLength; i++) {
  if (arr[i] % 2 === 0) {
    totalEven += arr[i];
  }
}
// console.log(`Số chẵn ${totalEven}`);
for (let i = 0; i < arrLength; i++) {
  if (arr[i] % 2 !== 0) {
    totalOdd += arr[i];
  }
}
// console.log(`Số lẻ ${totalOdd}`);
signalOfTotal = totalEven - totalOdd;
alert(`Hiệu của 2 tổng số chẵn và số lẻ là ${signalOfTotal}`);
