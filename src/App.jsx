import React from 'react'

const App = () => {
  let [count, setCount] = React.useState(0)
  return (
    <>
      <div className='w-72 text-2xl font-bold p-10 bg-green-500 mx-auto mt-52 rounded-xl text-white '>
        <h1 className='text-4xl font-bold inline-block'> counter : {count}</h1>
        <button className='ml-5 mt-10 px-4 py-1 
        border-black border-2 bg-yellow-500 rounded-xl disabled;opacity-40'
          onClick={() => setCount(count + 1)} disabled={count >= 10} >up</button>
        <button className='ml-4 mt-10 px-4 py-1
         border-black border-2 bg-yellow-500 rounded-xl disabled;opacity-40'
          onClick={() => setCount(count - 1)} disabled={count <= 0} >doun</button>
      </div>
    </>
  )
}

export default App