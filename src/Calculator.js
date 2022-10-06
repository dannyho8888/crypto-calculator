import React, { useEffect, useState} from 'react'
import Currency from './Currency'
import ExchangeRate from './ExchangeRate'

function Calculator() {
  // const [amount, setAmount] = useState(1);
  const [topAmount, setTopAmount] = useState(1);
  const [bottomAmount, setBottomAmount] = useState(1);
  const [rate, setRate] = useState(150000);

  // update currency every 15 seconds
  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/HKD.json")
        const data = await res.json();
        setRate(data.bpi.HKD.rate_float);
      } catch (e) {
        console.log("Error when fetching data");
      } 
    }
    const intervalId = setInterval(() => {
      fetchCurrency();
      console.log("Exchange rate: " + rate);
    }, 15000);
    return () => clearInterval(intervalId);
  }, [rate])

  // let topAmount, bottomAmount;

  //make setState reflect immediately 
  useEffect(() => {
    setBottomAmount(topAmount * rate);
  }, [topAmount])

  useEffect(() => {
    
  }, [bottomAmount])

  function handleTopAmountChange(e) {
    setTopAmount(e.target.value);
    // topAmount = e.target.value;
    // bottomAmount = topAmount * rate;
  }
  
  function handleBottomAmountChange(e) {
    setBottomAmount(e.target.value);
    setTopAmount(bottomAmount / rate);
    // bottomAmount = e.target.value;
    // topAmount = bottomAmount / rate;
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