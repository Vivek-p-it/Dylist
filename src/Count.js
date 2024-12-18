import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0)
    function Inc(){
            setCount(count+1)
    }
    function Dec(){
      setCount(count-1)
}
  return (
    <>
    <div>
      <h3>Set the Count of Fruits</h3>
        <h1>{count}</h1>
        <button onClick={Inc}>Increase</button>
        <button onClick={Dec}>Decrease</button>
    </div>
    </>
  )
}

export default Count