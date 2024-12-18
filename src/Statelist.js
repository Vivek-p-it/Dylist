import React, {useState} from 'react'

function Statelist() {
    const [fruit,setfruit] = useState(["Apple"])
    function Afruit(){
        let v = document.getElementById("inp").value;
        if(v===''){
            alert("Please enter some fruits");
        }
        else{
        setfruit([...fruit,v])
        document.getElementById("res").innerHTML += " "+v;
        document.getElementById("inp").value = '';
        }
    }
    function Rfruit(){
        let v1 = fruit.slice(-1);
        setfruit(fruit.slice(0,-1));
        document.getElementById("res1").innerHTML = " "+v1;
    }
  return (
    <div>
        <input type="text" id ="inp" placeholder='Enter any fruit value'/>
        <button onClick={Afruit}>Add</button>
        <br/>
        <br/>
        <h2>List of added items</h2>
        <output id ="res"></output>
        <br/><br/>
        <h1>Main List</h1>
        {fruit.map((x,index)=><li key={index}>{x}</li>)}
        <br/><br/>
        <button onClick={Rfruit}>Remove</button>
        <h2>Removed item</h2>
        <output id ="res1"></output><br/><br/>
    </div>
  )
}

export default Statelist