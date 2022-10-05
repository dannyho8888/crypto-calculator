import React from 'react'
import Currency from './Currency'
import ExchangeRate from './ExchangeRate'

function Calculator() {
  return (
    <div>
        <div className="px-2 text-xl grey">
            Lite Cryptocurrency Exchange Calculator
        </div>
        
        <div className="bg-white cal-width rounded-xl px-8 py-10 mt-5">
            <Currency />
            <ExchangeRate />
            <hr />
            <Currency />
        </div>
    </div>
    
  )
}

export default Calculator