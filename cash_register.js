function checkCashRegister(price, cash, cid) {
  const money = [
    [ "PENNY"      , 0.01 ],
    [ "NICKEL"     , 0.05 ],
    [ "DIME"       , 0.1  ],
    [ "QUARTER"    , 0.25 ],
    [ "ONE"        , 1    ],
    [ "FIVE"       , 5    ],
    [ "TEN"        , 10   ],
    [ "TWENTY"     , 20   ],
    [ "ONE HUNDRED", 100  ],
  ]

  let difference = cash - price

  const round3decimals = num => Math.round(num * 1000) / 1000

  const change = money.reverse().reduce((result, item) => {
    const [unit, amount] = item
    if (difference > amount) {
      let cash = cid.find(e => e[0] == unit)
      const units = cash[1] / amount
      let sum = 0;
      for (let i = 0; i < units; i++)
        if (round3decimals(difference - sum - amount) >= 0)
          sum += amount
      difference -= sum
      cash[1] -= round3decimals(sum)
      return [...result, [unit, round3decimals(sum)]]
    }
    return result
  }, [])

  if (difference > 0)
    return {status: "INSUFFICIENT_FUNDS", change: []}

  if (cid.every(e => e[1] == 0)) {
    let result = cid.map(cid_item => {
      for (let change_item of change)
        if (change_item[0] == cid_item[0])
          return change_item
      return cid_item
    })
    return {status: "CLOSED", change: result}
  }

  return {status: "OPEN", change}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
