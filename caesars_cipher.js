function rot13(str) {
  const rot = char => {
    const ascii = char.charCodeAt(0)
    const first = 'A'.charCodeAt(0)
    let result = (ascii + 13 - first) % 26
    if (result < 0) result *= -1
    return String.fromCharCode(result + first)
  }
  return str.replace(/[A-Z]/g, character => rot(character))
}

console.log(rot13("SERR PBQR PNZC"))
