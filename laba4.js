const readline = require('readline')
let x


const F = (x) => {
  let result
  result = 0.5 * (x + Math.sin(x))
  console.log('result for F(x) = ', result)
}

const integral = (from = 1, before = 2) => {
  let length, result
  length = (before/2) - (from/2)
  result = Math.pow(Math.cos(length), 2)
  console.log('result for integral', result)
}

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
})

rl.on('line', (input) => { 
  console.log(`Received: ${input}`); 
  setTimeout(function() {
    F(input)
    integral()
  }, 2000)
  rl.close()
})
