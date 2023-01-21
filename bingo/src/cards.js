
// const getRow = (num) => {
//     if (num <= 5) {
//         return 1
//     } else if (num <= 10) {
//         return 2
//     } else if (num <= 15) {
//         return 3
//     } else if (num <= 20) {
//         return 4
//     } else {
//         return 5
//     }
// }

export const getCards = (obj, selected) => {
    let num = 1;
    while (num <= 25) {
      obj[num] = num === selected || obj[num] ? true : false
      num++;
    }
    return obj
}


