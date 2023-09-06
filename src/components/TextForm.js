import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpperCase = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowerCase = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClear = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Cleard Text","success")
    }
    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        //setText(newText)
        props.showAlert("Copied","success")
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed","success")
        
    }
    const handleOnChange = (event) =>{
        // console.log("handle On Changed");
        setText(event.target.value)
    }


    const [text, setText] = useState("");
  return (
    <>
        <div className="container" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'gray' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-3" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        {/* word counter */}
        <div className="container2 my-2" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text sumary : </h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textBox to preview here... "}</p>
        </div>
    </>
  )
}
