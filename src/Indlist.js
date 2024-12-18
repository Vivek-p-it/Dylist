import React from 'react'

function Indlist() {
    const col = ["orange","green"]
  return (
    <div>
      <h4>Indexed List</h4>
        {col.map((items,index)=><li key = {index}>{items}</li>)}
    </div>
  )
}

export default Indlist