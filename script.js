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
  const input = args
  const result = []
  print(input)

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
if ("+,-.#".indexOf(currentElement) >= 0) {
//sortiert alle angegebenen Sonderzeichen aus aus
}  else{
  result.push(currentElement)
}
}

const clearedString = result.join("")
//sagt, dass die Buchstabenelemente zusammengehören
const tmp = clearedString.split(" ")
//sagt, dass die clearedString (gesäuberte Liste)mdurch Leerzeichen getrennt werden soll
print(tmp)

return tmp.length
}


export function aufgabe05 (args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if (currentElement === " ") {
      //ignoriert alle Leerzeichen
    } else if (currentElement === ".") {
      //ignoriert alle Punkte
    } else if (currentElement.toUpperCase() === currentElement) {
      return true //wenn die Buchstaben des Eingegebenen mit der grossgeschriebenen Version übereinstimmen, dann soll er true zurückgeben
    }

  }
  return false //wenn das Eingegebene diese Funktion nicht erfüllt, dann soll er false zurückgeben
  }