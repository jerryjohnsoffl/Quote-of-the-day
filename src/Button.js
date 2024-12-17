import React from 'react'

function Button({fetchQuote}) {
  return (
    <div className='w-full flex justify-center'>
        <button onClick={fetchQuote} className="bg-blue-500 px-8 py-2 rounded-full text-white w-11/12 max-w-80">Get new quote</button>
    </div>
  )
}

export default Button