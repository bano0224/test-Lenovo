//1)

const n = [1,2,3,4,5,6,7,8,9]
const pairNumbers = []

const pair = (n) => {
  for(let i=0; i < n.length; i++) {
    if(n[i] % 2 === 0) {
      pairNumbers.push(n[i])
    }
  }
  return pairNumbers;
}