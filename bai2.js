function countCapitalLetter(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }
  if (count > 0) {
    return count;
  } else {
    console.log("That Strings is not contain upper char");
  }
}
// let strTest = "abcdefgh";
// let strTest = "CodeGym";
// let strTest = "CODEGYM"
// let strTest = "Hồ Văn Phúc"
let strTest = "ABC232jbsdCDF";
let charactersCapitalLetter = countCapitalLetter(strTest);
console.log(
  `Số ký tự in hoa trong chuỗi '${strTest}' là: ${charactersCapitalLetter}`
);
