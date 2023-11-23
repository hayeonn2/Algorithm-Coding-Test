function solution(s) {
  let result = "";

  const words = s.toLowerCase().split(" ");

    let arr = words.map((el) => {
    let alphabet = el.split("");

    return alphabet.map((item, idx) => {
      return idx % 2 === 0 ? item.toUpperCase() : item
    }).join("");

  });
          return arr.join(" ")
}



//     return s
//         .toLowerCase()
//         .split(" ")
//         .map((str) => {
//         return str
//             .split("")
//             .map((el, idx) => {idx % 2 === 0 ? el.toUpperCase() : el}).join("");
//     }).join(" ");
    