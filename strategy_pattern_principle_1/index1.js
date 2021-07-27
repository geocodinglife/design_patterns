const strategy = {
  "Addition": function(a, b) { return a + b },
  "Subtraction": function(a, b) { return a - b },
  "Multiplication": function(a, b) { return a * b },
  "Division": function(a, b) { return a / b }
}

const context = function(key, a, b) { return strategy[key](a, b) }

const result1 = context("Addition", 1, 2)
document.write(`<h1>${result1}</h1><br>`)

const result2 = context("Subtraction", 1, 2)
document.write(`<h1>${result2}</h1><br>`)

const result3 = context("Multiplication", 1, 2)
document.write(`<h1>${result3}</h1><br>`)
const result4 = context("Division", 1, 2)
document.write(`<h1>${result4}</h1><br>`)