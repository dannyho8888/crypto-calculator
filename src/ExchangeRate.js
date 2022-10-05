import React from 'react'

function ExchangeRate({ currency }) {
  return (
    <div className="flex grey text-sm">
        <div className="font-bold">Exchange Rate:</div>
        <div> 1 BTC = {currency} HKD</div>
        
    </div>
  )
}

export default ExchangeRate