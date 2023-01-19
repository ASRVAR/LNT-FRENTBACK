import React, {useState} from "react";

export default function TextForm(props) {
    const handelUpClick=()=>{
       // console.log("Uppar Case" );
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handelonChange=(event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }
    const handelLowClick=()=>{
        let oldTextLower=text.toLowerCase();
        setText(oldTextLower);
    }
    const handelClearClick=()=>{
        let clear="";
        setText(clear);
    }
    const handelGmailClick=()=>{
        let gmail=text+"@gmail.com";
        setText(gmail);
    }
    const handelExtarSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
  /*  
        const addition=()=>{
        let a=3;
        let b=2;
        let r=a+b;
        //console.log(r); 
        setText(r);
    }
    */
    

    const [text,setText]=useState("");
   // const [form,setForm]=useState("This is Form Tab");
     //setText("Hello Form");
  return (
    <>
    <div className="container">
        
<div className="mb-3 mt-3">
  <h3>{props.title} </h3>
  <textarea className="form-control" id="myBox" onChange={handelonChange} value={text} rows="5"></textarea>
</div>

<button className="btn btn-info mx-2" onClick={handelUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert To Lowercase</button>
{/* <button className="btn btn-success" onClick={addition}>Addition</button> */}
<button className="btn btn-info mx-2" onClick={handelClearClick}>Clear Textarea</button>
<button className="btn btn-info mx-2" onClick={handelGmailClick}>Convert To Gmail</button>
<button className="btn btn-info" onClick={handelExtarSpaces}>Remove Extra Spaces</button>
</div>

<div className="container mt-3">
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} Word & {text.length} Character</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
    </>
  );
}
