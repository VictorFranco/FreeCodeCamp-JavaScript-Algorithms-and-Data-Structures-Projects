function convertToRoman(num) {
  const romanObj = [
    [ "I" , 1    ],
    [ "V" , 5    ],
    [ "X" , 10   ],
    [ "L" , 50   ],
    [ "C" , 100  ],
    [ "D" , 500  ],
    [ "M" , 1000 ],
  ]

  const result = romanObj.reverse().reduce((result, arr, index) => {
    const [roman, arabic] = arr
    if(num / arabic >= 1) {
      const repeat = parseInt(num / arabic)
      num -= repeat * arabic
      result += roman.repeat(repeat)
    }
    if(index + 1 < romanObj.length) {
      let pos = index % 2 ? 1 : 2
      if (index + 2 == romanObj.length) pos = 1
      const previous = romanObj[index + pos]
      const aux = arabic-previous[1]
      if (num / aux >= 1 && num / aux < 2) {
        num -= aux
        result += `${previous[0]}${roman}`
      }
    }
    return result
  }, "")

  return result;
}

console.log(convertToRoman(19))
