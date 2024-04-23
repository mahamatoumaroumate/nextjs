'use client'
import { useState } from 'react'
const clientPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='text-7xl font-bold my-4'>{count}</h1>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
        increase
      </button>
    </div>
  )
}
export default clientPage
