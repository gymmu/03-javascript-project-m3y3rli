export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //falls es ein kleines "e" ist, soll es nicht angehängt werden
    if (currentElement === "e") {
      //result.push("")
    } //falls es ein grosses "E" ist, soll es nicht angehängt werden
    else if (currentElement === "E") {
      //result.push("")
    }
      else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
  
    //falls es einen kleinen Buchstaben beinhaltet, soll es gross an die Liste angehängt werden
   currentElement = currentElement.toUpperCase ()
   result.push(currentElement)
  }
  return result.join("")
}

export function aufgabe03 (args) {
  const input = args
  const result = []

  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
      //zähle dieses e
      countE = countE + 1
     }
    else if (currentElement === "E") {
      //zähle dieses E
      countE++
    }
  }
  return countE
}

export function aufgabe04 (args) {
  const input = args.split(" ")
  //Das Eingegebene wird an den Leerzeichen getrennt
  const result = []
  print(input)

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return input.length
}