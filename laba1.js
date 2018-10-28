const decimal = require('decimal.js').Decimal
const fs = require('fs')

fs.unlink('resultLaba1.txt', (err) => {
  try {
    if(err) throw err
  } catch (err) {
    console.log('If start this sctipt first time that be error')
  }
  console.log('resultLaba2.txt was deleted')
})

const func = (number) => {
  let num = new decimal(number)
  let del
  let $num
  for(let i = 7; i > 0; i--) {
    $num = num.toFixed(i)

    console.log('x = ' + num)
    fs.appendFileSync('resultLaba1.txt', '\n' + 'x = ' + num)
    console.log('x* = ' + $num)
    fs.appendFileSync('resultLaba1.txt', '\n' + 'x* = ' + $num)

    num = +num
    $num = +$num

    del = $num - num

    console.log('delta (x) = ' + del.toFixed(i + 1) + ',')
    fs.appendFileSync('resultLaba1.txt', '\n' + 'delta (x) = ' + del.toFixed(i + 1) + ',')

    del = +del
    del *= Math.pow(10, 7)
    console.log(del.toFixed(1) + ` * 10^-${i}`)
    fs.appendFileSync('resultLaba1.txt', '\n' + del.toFixed(1) + ` * 10^-${i}`)

    bet = $num / del
    bet = bet.toFixed(5)
    bet = +bet
    bet *= Math.pow(10, i)
    bet = bet.toFixed(5)
    bet = +bet
    console.log(bet)
    num = $num
    console.log('===================================')
    fs.appendFileSync('resultLaba1.txt', '\n' + '===================================')
  }
}

func(3.35466646)