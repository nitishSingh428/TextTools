import React, {useState} from 'react'
                               
export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = () =>{
        const response = window.confirm("Every thing will be deleted, are you sure?");
        if(response){
            setText("");
        } 
        props.showAlert("Text cleared!", "success")
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleOnChange= (event) =>{
        // console.log("On change");
        setText(event.target.value)
        
    }
        

                        // this is default value
    const [text, setText]=useState("");
    // text = "new Text";  // wrong way to change the state
    // setText("new Text");   // corerct way to change the state
    return (
        <>
            
            {/* <h1>{props.heading}</h1> */}
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    {/* <label for="myBox" className="form-label"></label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8" placeholder='Enter text here' placeholderTextColor='blue'></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div>
            <div className="container my-5" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 *text.split(" ").length } Minutes required to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>

    )
}
