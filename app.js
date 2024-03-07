alert("17-masala");
(function () {
  console.log("17-masala");
})();

let achko2 = +prompt("2 achkoli gollar sonini kiriting");
let achko3 = +prompt("3 achkoli gollar sonini kiriting");
function achkolar(x, y) {
  let result = x * 2 + y * 3;
  return result;
}
console.log(achkolar(achko2, achko3));

alert("18-masala");
(function () {
  console.log("18-masala");
})();
let sth = prompt("Biror nima yozing");
let def = "Edabit";
function string(w, c) {
  let result = w + c;
  return result;
}
console.log(string(sth, def));

alert("19-masala");
(function () {
  console.log("19-masala");
})();

let son1 = +prompt("1-raqamni kiriting");
let son2 = +prompt("2-raqamni kiriting");

function iktason(a, b) {
  if (a + b > 100) {
    console.log("False");
  } else {
    console.log("True");
  }
}
console.log(iktason(son1, son2));

alert("20-masala");
(function () {
  console.log("20-masala");
})();

let son = +prompt("Raqam kiriting");
let arr = [];
function Recursion(num) {
  arr.unshift(num);
  if (num == 1) {
    return arr;
  } else {
    return Recursion(num - 1);
  }
}
console.log(Recursion(2));

alert("21-masala");
(function () {
  console.log("21-masala");
})();
let tovuq = +prompt("Tovuqlar sonini kiriting");
let qoy = +prompt("Qo'ylar sonini kiriting");
let sigir = +prompt("Sigirlar sonini kiriting");
function oyoqlar(t, q, s) {
  let result = t * 2 + q * 4 + s * 4;
  return result;
}
console.log(oyoqlar(tovuq, qoy, sigir));

alert("22-masala");
(function () {
  console.log("22-masala");
})();
