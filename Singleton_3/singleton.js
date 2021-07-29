const singleton = Symbol()
const singletonEnforcer = Symbol()

class Dialog {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw 'Cannot constructor singleton'
    }
  }

  static get showDialog() {
    if(!this[singleton]) {
      let dialogDiv = document.createElement('div')
      dialogDiv.setAttribute('id', 'login')
      dialogDiv.innerHTML = `
        Username: 
        <input type='text' id='username' /><br><br>
        Password: 
        <input type='password' id='password' /><br><br>
        <input type='button' value='Submit' />` 
        document.body.appendChild(dialogDiv)
        this[singleton] = new Dialog(singletonEnforcer)
    }
  return this[singleton]
  }
}

function doLogin(){
   Dialog.showDialog()
}

//////////////////////////////////////////////////////////////////////////////////
// pending to show best option

// const Dialog = {
//   instance: null,

//   showDialog: function() {
//     if(Dialog.instance === null){
//       const dialogDiv = document.createElement('div')
//       dialogDiv.setAttribute('id', 'login')
//       dialogDiv.innerHTML = `
//         Username: <input type='text' id='username' />
//           <br><br>
//         Password: <input type='password' id='password' />
//           <br><br>
//         <input type='button' value='Submit' />
//         ` 
//           document.body.appendChild(dialogDiv)
//           Dialog.instance = {}
//     }
//         return Dialog.instance
//   }
// }

//     function doLogin(){
//       Dialog.showDialog()
//     }