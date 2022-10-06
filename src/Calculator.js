import React, { useEffect, useState} from 'react'
import Currency from './Currency'
import ExchangeRate from './ExchangeRate'

function Calculator() {
  const [topAmount, setTopAmount] = useState(0);
  const [bottomAmount, setBottomAmount] = useState(10);
  const [currCurrency, setCurrCurrency] = useState(15000);

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/HKD.json")
      const data = await res.json();
      setCurrCurrency(data.bpi.HKD.rate_float);
    } catch (e) {
      console.log("Error when fetching data");
    }
  }

  // update currency every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(async () => {
      fetchCurrency();
      console.log(currCurrency);
    }, 30000);
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div>
        <div className="px-2 text-xl grey">
            Lite Cryptocurrency Exchange Calculator
        </div>
        
        <div className="bg-white cal-width rounded-xl px-8 py-10 mt-5">
            <Currency amount={topAmount}/>
            <ExchangeRate currency={currCurrency}/>
            <hr />
            <Currency amount={bottomAmount}/>
        </div>
    </div>
    
  )
}

export default Calculator