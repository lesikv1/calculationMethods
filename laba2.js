const decimal = require('decimal.js').Decimal
const fs = require('fs')

fs.unlink('resultLaba2.txt', (err) => {
  try {
    if(err) throw err
  } catch (err) {
    console.log('If start this sctipt first time that be error')
  }
  console.log('resultLaba2.txt was deleted')
})

let a = 0.49, 
  b = 0.65, 
  arrX = [], 
  arrY = [],
  item = 16,
  x = 0.53,
  _ = 20,
  h


for(let i = 0; i < item; i++) { 
  arrY[i] = 1 / Math.sqrt(a + 1) 
  arrX[i] = a 
  a += 0.01 
  a = a.toFixed(2) 
  a = +a 
  console.log('x',i,' = ',arrX[i], '| y',i,' = ', arrY[i]) 
  fs.appendFileSync('resultLaba2.txt', '\n' + 'x' + i + ' = ' + arrX[i] + '| y' + i + ' = ' + arrY[i])
} 


const formulaLabel = () => {
  const funcUp = (n) => {
    let result = 1
    for(let i = 0; i < item; i++){
      if(i != n){
        result *= x - arrX[i]
      }
    }
    return result
  }
  
  const funcDown = (n) => {
    let result = 1
    for(let i = 0; i < 16; i++) {
      if(i != n) {
        result *= arrX[n] - arrX[i]
      }
    }
    return result.toFixed(30)
  }
  
  const funcF = () => {
    let result = 0
    for (let i = 0; i < item; i++) {
      result += arrY[i] * (funcUp(i) / funcDown(i))
      result = new decimal(`${result}`)
      result = result.toFixed(_)
      result = +result
    }
    return result
  }
  
  let mainResult = new decimal(`${funcF()}`)
  console.log('--------------------')
  console.log('Result Formula Larang = ', mainResult.toFixed(_))
  fs.appendFileSync('resultLaba2.txt', '\n' + 'Result Formula Leibniz = ' + mainResult.toFixed(_))
  h = mainResult.toFixed(_)
}

formulaLabel()

const formulaNuton = () => {
  let Pn = arrY[0]
  for(let i = 0; i < 15; i++) {
    Pn += arrY[i + 1]
    Pn = Pn.toFixed(_)
    Pn = +Pn
    for(let j = 0; j < i; j++) {
      Pn *= (x - arrX[j])
      Pn = new decimal(Pn)
      Pn = Pn.toFixed(_)
      Pn = +Pn
    }
    Pn = Pn.toFixed(_)
    Pn = +Pn
  }
  return Pn
}


console.log('--------------------')
console.log('Result Formula Newton = ', h)
console.log('--------------------')
fs.appendFileSync('resultLaba2.txt', '\n' + 'Result Formula Newton = ' + formulaNuton())


let dotsResult = 1 / Math.sqrt(x + 1) 

console.log('x = ', x)
fs.appendFileSync('resultLaba2.txt', '\n' + 'x = ' + x)
console.log('1 / Math.sqrt(x+1) = ', dotsResult)
fs.appendFileSync('resultLaba2.txt', '\n' + '1 / Math.sqrt(x+1) = ' + dotsResult)