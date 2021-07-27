const payStrategy = {
  "MasterCard": function(price) {
    document.getElementById('result').innerHTML = `Pay ${price} $ by MasterCard`
  },
  "VisaCard": function(price) {
    document.getElementById('result').innerHTML = `Pay ${price} $ by VisaCard`
  },
  "Paypal": function(price) {
    document.getElementById('result').innerHTML = `Pay ${price} $ by Paypal`
  }
}

function payManager(key, price) {
  return payStrategy[key](price)
}

function doTestPay(obj) {
  payManager(obj.value, 100)
}