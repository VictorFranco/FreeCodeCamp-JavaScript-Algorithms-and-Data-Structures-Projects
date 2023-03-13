function palindrome(str) {
  const normalize = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  for (let i = 0; i < normalize.length/2; i++)
    if (normalize[i] != normalize[normalize.length - i - 1])
      return false
  return true
}

console.log(palindrome("_ eye"))
