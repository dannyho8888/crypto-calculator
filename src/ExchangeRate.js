import React, { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'

function ExchangeRate({ currency }) {
  const [rate, setRate] = useState(currency);
  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/HKD.json")
      const data = await res.json();
      setRate(data.bpi.HKD.rate_float.toFixed(2));
      console.log(data.bpi.HKD.rate_float);
    } catch (e) {
      console.log("Error when fetching data");
    } 
  }
  
  useEffect(() => {
    fetchCurrency();
    console.log("Exchange rate: " + rate);
  }, [])

  return (
    <div className="flex grey text-sm p-2">
        <div className="font-bold">Exchange Rate:</div>
        <div> 1 BTC = {rate} HKD</div>
        <div className='px-3'>
          <FontAwesomeIcon icon={faArrowsRotate} 
            className="cursor-pointer text-orange-500 text-xl hover:animate-spin transition-all duration-400"
            onClick={fetchCurrency}
          />
        </div>
    </div>
  )
}

export default ExchangeRate