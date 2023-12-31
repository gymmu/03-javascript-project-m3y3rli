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
  const cleanText = [] //lösch alle Sonderzeichen ausser Leerzeichen
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //wenn kein Sonderzeichen, dann soll er angehängt werden
    if (32 === ascii) {
      cleanText.push(currentElement)
    } else if (65 <= ascii && ascii <= 90) { 
      cleanText.push(currentElement) //sind alle Grossbuchstaben
      cleanText.push(currentElement) 
    } else if (97 <= ascii && ascii <= 122) {
      cleanText.push(currentElement)//sind alle Kleinbuchstaben
    } 
  } 
  const tmp = cleanText.join("")
  const tmpText = []
  for (let i = 0; i < tmp.length; i++) {
    const currentElement = tmp[i]
    const nextElement = tmp[i + 1]
    if (currentElement === " " && nextElement === " "){ //ignoriert mehrere Leerzeichen hintereinander  
    } else {
      tmpText.push(currentElement)
    }
  }
 
 const clean = tmpText.join("")
 
  let words = 0
  for (let i = 0; i < clean.length; i++) {
    const currentElement = clean[i]
    if (currentElement === " ") {
      words++
    }
  }
  return words + 1
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
 
  export function aufgabe06 (args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)
      if (ascii >= 48 && ascii <= 57) {
      } else if (ascii >= 65 && ascii <= 90) {
        //überprüft ob es ein Grossbuchstabe ist
      } else if (ascii >= 97 && ascii <= 122) {
        //überprüft ob es ein Kleinbuchstabe ist
      } else if (ascii === 32) {
        //überprüft ob es ein Leerzeichen ist
      } else {
        return true //wenn es ein Sonderzeichen ist also kein der obrigen Test erfüllt, dann soll er true zurückgeben
      }
    }
    return false //alle Test nicht erfüllt, d. h. es ist leer also kein TExt
   }

   export function aufgabe07 (args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === "u" && input[i+1] === "n" && input[i+2] === "d") {
        return true //wenn das Element ein u(i) enthält und danach ein n (i+1) und dann ein d(i+2) dann soll er true zurückgeben
      }
      }
    return false //wenn nicht dann false
   }

   export function aufgabe08(args) {
    const input = args        
    const result = []                    
    for (let i = 0; i < input.length; i++) {      
      const currentElement = input[i]        
      if (currentElement === "e") {  
        result.push(3) //wenn ein kleines e vorkommt soll es mit 3 ersetzt werden                                                     
      } else {                                                
        result.push(currentElement)  //sonst einfach das currentElement zurückgeben         
      }
    }
    return result.join("")                                        
   }

export function aufgabe09 (args) {
  const input = args

 let len = 0

  for (let i = 0; i < input.length; i++) {
    len++ //zähle die Buchstaben von der variable len
  }
  if (len === 6){
  return true //wenn die variable len genau 6 ist dann soll er true zurückgeben
}
  return false //sonst false
  }

  export function aufgabe10 (args) {
    const input = args
    
    if (input.length !== 7) return false
    if (input[0] !== "#" ) return false

    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)

      if (48 <= ascii && ascii <= 57) {
        //sind alle Zahlen von 0 bis 9 
      } else if (65 <= ascii && ascii <= 70) {
        //sind alle grossen Buchstaben von A bis F 
      } else if (97 <= ascii && ascii <= 102){
        //sind alle kleinen Buchstaben von a bis f
      } else {
        return false
      }
    }
    return true
  }

  export function aufgabe11 (args) {
    const input = args
    const result = []
    
if (input.length > 1) {
  return null //function guard 
}

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
      return currentElement.charCodeAt(0)
    } 
    return null
  }

  export function aufgabe12 (args) {    const input = args
    const result = []
     for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
     
      if(currentElement === "e"){
        return i 
      }
     }
    return -1
  }

  export function aufgabe13 (args) {
    const input = args

    for (let i = input.length -1; i >=0; i--){
      const currentElement = input[i]
      //i haben wir umgekehrt, so dass er von hinten anfangt zu zählen
     if (currentElement === "e") {
        return i 
      //wenn ein e enthalten ist dann soll er den gespeicherten Wert von i zurückgeben
      }
    }
    return -1 //wenn er diese Funktion erfüllt dann soll er -1 zurückgeben, also wenn kein e enthalten ist
  }

  export function aufgabe14 (args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === "e"){
        return 2
      } else if (currentElement === "E"){

      }
    return -1
  }
  }

  export function aufgabe17 (args) {
 
    const text = args
    const phrases = []
    let currentPhrase = []
    for (let i = 0; i < text.length; i++) {
      const currentElement = text[i]
      if (currentElement === ",") { //wenn das aktuelle Element ein Komma ist
        phrases.push(currentPhrase.join(""))
        currentPhrase = [] //leere die Variable
      } else {
        currentPhrase.push(currentElement)
      }
    }
    phrases.push(currentPhrase.join(""))
    return phrases
    }

  export function aufgabe15 (args) {
    const input = args
    const result = []
    if (input.lastIndexOf(" ") == input.length -1) {
       //wenn das letzte Element der Eingabe ein Leerzeichen ist
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        result.push(currentElement)
    }
  } else {
  for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement !== " " ) {
        result.push(currentElement)
        //wenn das aktuelle Element kein Leerzeichen ist, soll es angehägt werden an die Liste
      } else {
        return result.join("")
      }
    }
    return result.join("")
  }
 }

 export function aufgabe16(args) {
  const input = args
  const result1 = [] // Leerer Array für die erste Ergebnisgruppe
  const result2 = [] // Leerer Array für die zweite Ergebnisgruppe
  let readText = true // Boolean-Variable, die angibt, ob Text gelesen werden soll
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$" && readText !== false) {
      readText = false // Wenn das aktuelle Element "$" ist und readText nicht false ist, wird readText auf false gesetzt
    } else {
      if (readText === true) {
        result1.push(currentElement) // Wenn readText true ist, wird das aktuelle Element zur ersten Ergebnisgruppe hinzugefügt
      } else if (readText === false) {
        result2.push(currentElement) // Wenn readText false ist, wird das aktuelle Element zur zweiten Ergebnisgruppe hinzugefügt
      }
    }
  }
  if (result2.join("") !== "") {
    return result1.join("") + "," + result2.join("") // Wenn die zweite Ergebnisgruppe nicht leer ist, werden die Elemente der ersten und zweiten Ergebnisgruppe mit einem Komma verbunden und zurückgegeben
  } else {
    return result1.join("") // Wenn die zweite Ergebnisgruppe leer ist, werden nur die Elemente der ersten Ergebnisgruppe zurückgegeben
  }
 }

  export function aufgabe18 (args) {
    const input = args
    const inputName = []
    const inputAge = []
    let readText = true

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
       if (currentElement === " " && readText !== false) {
        //testes ob Leerzeichen vorhanden sind und wir noch Text lesen können
        readText = false
        //beides erfüllt, dann geht es weiter zum Alter
      } else {
        if (readText === true) {
          inputName.push(currentElement)//wenn es der Name liest, wird es zum Element inputName hinzu
        }
        else if (readText === false) {
          inputAge.push(currentElement)
          //wenn es das Alter liest dann fügen wir es zum Element inputAge hinzu
        }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
 } // Überprüft die Werte der inputName und inputAge Arrays und gibt entsprechende Sätze zurück
  
export function aufgabe19 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  
  }
  return result.join("")
}

 export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " ") return false    //wenn ein Punkt vorkommt und danach KEIN Leerschlag kommt dann false 
    else if(currentElement == "." && input[i+1] == " ") return true //wenn ein Punkt vorkommt und danach EIN Leerschlag kommt dann true
  }
  return result.join("")
 }

  export function aufgabe21 (args) {
    const input = args
    const result = []
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
    }
    return result.join("")
  }

  export function aufgabe24 (args) {
    const input = args
    const result = []

    if (input.length === 1) return input //function guard

    const firstElement = input[0]
    const lastElement = input[ input.length - 1 ]

    result.push(lastElement)
    for (let i = 1; i < input.length - 1; i++) {
      const currentElement = input[i]
      result.push(currentElement)
    }
    result.push(firstElement)

    return result.join("")
  }

  export function aufgabe27 (args) {
    const input = args

    // Wenn länge gleich 0, dann false
    if (input.length === 0) return false

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i].charCodeAt(0) 
      if (input.length == 0) return false//wenn länge gleich 0, dann false
      if (47 >= currentElement || currentElement >= 58) return false //wenn currentElement nicht zwischen 0 und 9 ist, dann false
    }
   return true
   }

  export function bubbleSort (args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
const result = list.join("")
return result
  }