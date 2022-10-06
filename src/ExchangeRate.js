import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'

function ExchangeRate({ currency }) {
  return (
    <div className="flex grey text-sm p-2">
        <div className="font-bold">Exchange Rate:</div>
        <div> 1 BTC = {currency} HKD</div>
        <div className='px-3'>
          <FontAwesomeIcon icon={faArrowsRotate} className=" text-orange-500 text-xl" />
        </div>
    </div>
  )
}

export default ExchangeRate