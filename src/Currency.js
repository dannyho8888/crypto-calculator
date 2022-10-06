import React from 'react'

function Currency({ symbol, amount, onChangeAmount }) {
  return (
    <div>
        <div className="pl-2 font-semibold grey">{symbol}</div>
        <input className="border-2 border-gray-300 py-1 pl-2 pr-12 font-medium text-2xl"
          type="number" 
          value={amount}
          onChange={onChangeAmount}
        />
    </div>
  )
}

export default Currency