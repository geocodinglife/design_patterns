class Node {
  constructor(name) {
    this.name = name
    this.childNodes = new Array()
  }

  getName() { return this.name }

  setName() { return this.childNodes}

  getChildNodes() { return this.childNodes }

  add(node) { return this.childNodes.push(node) }
}

class Tree {
  constructor(name) {
    this.name = name
    this.root = new Node(name)
  }

  getName() { this.name }

  setName(name) { this.name}

  getRoot() { return this.root }
}

//////////////////////////Test///////////////////////////////

const tree = new Tree('World')
const root = tree.getRoot()
china = new Node('China')
root.add(china)

beijing = new Node('Bei Jing')
shanghai = new Node('Shang Hai')
china.add(beijing)
china.add(shanghai)

america = new Node('America')
root.add(america)

const san_francisco = new Node('San Francisco')
const new_york = new Node('New York')
america.add(san_francisco)
america.add(new_york)

document.write(`${root.getName()} <br>`)
const childNodes = root.getChildNodes()
for (let i = 0; i < childNodes.length; i++) {
  let node = childNodes[i]
  document.write(`----  ${node.getName()} <br>`)
  
  const childNodes2 = node.getChildNodes()
  for ( let j = 0; j < childNodes.length; j++) {
    const node2 = childNodes2[j]
    document.write(`------- ${node2.getName()} <br>`)
  }
}



