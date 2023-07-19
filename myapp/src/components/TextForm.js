// import react from 'react';
import react ,{useState} from 'react';// useState is Hook
// understanding States & Handling Event in React 



export default function TextForm(props){
    const handleUPClick=()=>{
        console.log("Uppercase was clicked");
        // setText("You have clicked on handleUpclick");
        setText(text.toUpperCase());
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase())
    }

    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText]=useState(''); // Declare a new state variable, which we'll call "count"
    // hooks can help to perform operation without creating a class
    // we can not change the text value so we use setText() function 
    //text="new text"; wrong way to change the state
    // setText("new text"); right way to change the state
    return(
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
              
                <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} placeholder='Enter text here....' rows="8"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handleUPClick}>Convert To Upper Case</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Upper Case</button>
                </div>
            </div>
            <div className="container m-3">
                <h2>Text Your Summery</h2>
                <p> {text.split(" ").length} Word  and {text.length} Characters</p>
                <p>{0.008*text.split(" ").length} Minute required to read</p> 
                {/* 1/125 minute/no of word */}
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
};