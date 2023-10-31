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
