import React from 'react'

function Objlist() {
    const stu = [{
        id:1,
        name:"ab",
        marks:20
    },
{
    id:2,
    name:"bc",
    marks:18
}]
const hu = stu.map(x=><li key = {x.id}>My id is {x.id} and My name is {x.name}, My marks are {x.marks}</li>)
  return (
    <>
    <div>
      <h6>States with key Property</h6>
      <h1>{hu}</h1>
      </div>
    </>
  )
}

export default Objlist