class Addition {
  calculate(a, b){ return a + b }
}

class Subtraction {
  calculate(a, b) { return a - b }
}

class Multiplication {
  calculate(a, b){ return a * b }
}

class Division {
  calculate(a, b) { return a / b }
}

class Context{
  constructor(strategy) { this.strategy = strategy }

  calculate(a, b) { return this.strategy.calculate(a, b) } 
}


const context1 = new Context(new Addition())
const result1 = context1.calculate(4, 2)
document.write(`<h1>${result1}</h1><br>`)
   
const context2 = new Context(new Subtraction())
const result2  = context2.calculate(5, 2)
document.write(`<h1>${result2}</h1><br>`)
const context3 = new Context(new Multiplication())
const result3  = context3.calculate(6, 2)
document.write(`<h1>${result3}</h1><br>`)

const context4 = new Context(new Division())
const result4  = context4.calculate(7, 2)
document.write(`<h1>${result4}</h1><br>`)