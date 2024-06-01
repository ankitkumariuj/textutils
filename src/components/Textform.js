
import React, {useState} from 'react'

export default function Textform(props) {


const handelupclick = ()=>{
    console.log("upper case was clicked" + text);
    let ntext = text.toUpperCase();
    setText(ntext);
}

const handelLOclick= ()=>{
    console.log("upper case was clicked" + text);
    let ntext = text.toLocaleLowerCase();
    setText(ntext);
}
const handelCOPyclick = ()=>{
    var text= document.getElementById("exampleFormcontrolTextarea1");
    navigator.clipboard.writeText(text.value)
}
const handelonchange = (event)=>{
   console.log("on change");
    setText(event.target.value);
}
 
const handelDelclick = ()=>{
    var remove = document.getElementById("exampleFormcontrolTextarea1").value="";
     
}
const handelfontclick =()=>{
    var font= document.getElementById("exampleFormcontrolTextarea1").style.color="blue";
}

const handelpasteclick =()=>{
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "))
}
 
const [mystyle ,  setmystyle]= useState({
    
})
const [btntext ,setbtntext] = useState("Enable Dark Mode")

 const dark =()=>{
    if(mystyle.color == 'white'){
        setmystyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setbtntext("Enabel Light Mode")
       
    }
    else{
        setmystyle({
            color: 'white',
            backgroundColor: 'black'
        })
     setbtntext("Enanble Dark Mode")
    }
}
const [text,setText] = useState('Enter text here');
const dlr =()=>{
setText("");
}
  return (
    <div style={mystyle} id='dark'>
      <div class="mb-3" >
        <br />
        <label for="mybox" class="form-label">{props.heading}</label>
      <textarea class="form-control" id="exampleFormcontrolTextarea1" style={mystyle} value={text} onClick={dlr} onChange={handelonchange} rows="5"  ></textarea>
      </div><br/>
      <button class="btn btn-outline-success mx-2 my-1"  type="submit" onClick={handelupclick} >Upper case </button> 
      <button class="btn btn-outline-success mx-1 my-1" type="submit" onClick={handelLOclick} >Lower Case</button>
      <button class="btn btn-outline-success mx-1 my-1" type="submit" onClick={handelCOPyclick}>copy</button>
      <button class="btn btn-outline-danger mx-1 my-1" type="submit" onClick={handelDelclick}>Delect</button>
      <button class="btn btn-outline-success mx-1 my-1" type="submit" onClick={handelfontclick} >Color</button>
      <button class="btn btn-outline-success mx-1 my-1" type="submit" onClick={handelpasteclick}>Space Remove</button>

      <button class="btn btn-outline-success mx-1 my-1" type="submit" onClick= {dark} >{btntext} </button><br /><br />
 <div className=''>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length} word and {text.length} Characters</p><br /><br />
    <h1>Previews</h1>
<p>{text}</p>

 </div>

    </div>
    
  )
}
