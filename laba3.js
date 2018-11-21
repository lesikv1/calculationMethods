const readline = require('readline')
let x


const funcAnswer = (x) => {
  const result = Math.pow(5, x) - 6 * x - 3
  console.log('result = ', result)
}

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
})

rl.on('line', (input) => { 
  console.log(`Received: ${input}`); 
  funcAnswer(input)
  rl.close()
})
