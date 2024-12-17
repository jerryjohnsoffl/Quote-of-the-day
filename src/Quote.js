import React from 'react'

function Quote({text, author}) {
  return (
    <div className='container h-1/2 px-2'>
        <h1 className="text-4xl quote text mb-4">"{text}"</h1>
        <p className="text-right pr-6">-{author}</p>
    </div>
  )
}

export default Quote