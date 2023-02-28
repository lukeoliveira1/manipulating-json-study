let = array_fibonacci = []

function numberInListOrNot(listNumbers, num) {
  return listNumbers.includes(num)
}
  
    
function fibonacci() {
  let i = 0
  let j = 1
  let fib = 0
  array_fibonacci.push(i)
  array_fibonacci.push(j)

  while(fib < 100) {
    fib = i + j
    i = j
    j = fib
    array_fibonacci.push(fib)
  }

  return array_fibonacci
}
  
num = 13
listFibonacci = fibonacci()
console.log(numberInListOrNot(listFibonacci, num))