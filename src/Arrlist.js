import React from 'react'

function Arrlist() {
    const arr = ["apple","banana","orange"]
  return (
    <>
    <div>
      <center>
      <h1>List of Fruits</h1>
{arr.map(x=><li key = {x}>{x}</li>)}
</center>
</div>
</>
  )
}

export default Arrlist