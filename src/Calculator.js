import React, { useEffect, useState} from 'react'
import Currency from './Currency'
import ExchangeRate from './ExchangeRate'

function Calculator() {
  const [amount, setAmount] = useState(1);
  const [isTop, setIsTop] = useState(true);
  const [rate, setRate] = useState(150000);

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/HKD.json")
      const data = await res.json();
      setRate(data.bpi.HKD.rate_float);
    } catch (e) {
      console.log("Error when fetching data");
    } 
  }
  useEffect(() => {
    fetchCurrency();
    console.log("Exchange rate: " + rate);
  })

  // update currency every 15 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchCurrency();
      console.log("Exchange rate: " + rate);
    }, 15000);
    return () => clearInterval(intervalId);
  }, [rate])

  function format (number) {
    return number.toFixed(2);
  }

  function handleTopAmountChange(e) {
    setAmount(e.target.value);
    setIsTop(true);
  }
  
  function handleBottomAmountChange(e) {
    setAmount(e.target.value);
    setIsTop(false);
  }

  let topAmount, bottomAmount;
  if (isTop) {
    bottomAmount = format(amount * rate);
    
  } else{
    topAmount = format(amount / rate);
  }

  return (
    <div> 
        <div className="px-2 text-xl grey">
            Lite Cryptocurrency Exchange Calculator
        </div>
        
        <div className="bg-white cal-width rounded-xl px-8 py-10 mt-5">
            <Currency 
              amount={topAmount} 
              symbol="BTC" 
              onChangeAmount={handleTopAmountChange}
            />
            
            <ExchangeRate currency={rate}/>
            <hr />

            <Currency
              amount={bottomAmount} 
              symbol="HKD" 
              onChangeAmount={handleBottomAmountChange}
            />
        </div>
    </div>
    
  )
}

export default Calculator