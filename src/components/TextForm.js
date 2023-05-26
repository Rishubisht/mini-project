import React,{useState} from 'react';
import propType from 'prop-types' 
export default function TextForm(props){
  const  convertToUpperCase=()=>{
    setText(text.toUpperCase());
    // props.showAlert("converted to Upper Case","success")
  }
  const handleOnChange = (event)=>{
    console.log("Handling on Change");
    setText(event.target.value);
  }
  const convertToLowerCase =()=>{
    setText(text.toLowerCase());
    // props.showAlert("converted to Lower Case","success");
  }

  const removeSpaces = ()=>{
    setText(text.replaceAll(" ",""))
  }
  const removeData = ()=>{
    setText("");
  }
  const darkMode = ()=>{
         let textArea =  document.getElementById('myBox');
         textArea.style.color="#FFFFFF";
         textArea.style.backgroundColor="	#343a40"
  }
  const lightMode = () =>{
    let textArea =  document.getElementById('myBox');
    textArea.style.color="var(--bs-body-color)";
    textArea.style.backgroundColor="var(--bs-body-bg)"
  }
  let modes = {
    backgroundColor:props.mode === 'light'?'#FFFFFF':'#343a40',
    color: props.mode=='light'?'black':'#FFFFFF'
    
  }
  const [text,setText] = useState("");
    return (
<>
    <div className={`container my-3 text-${props.mode == 'light'?'dark':'light'}`}>
        <div className="mb-3">
          <label hmtlfor="myBox" className="form-label">{props.heading}</label>
          <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={ modes}></textarea>
          <button className="btn btn-primary my-3" onClick={convertToUpperCase}>Convert To UpperCase</button>
          <button className="btn btn-danger my-3 mx-3" onClick={convertToLowerCase}>Convert To LowerCase</button>
          <button className="btn btn-outline-success my-3 mx-3" onClick={removeSpaces}>Remove spaces</button>
          <button className="btn btn-info my-3 mx-3" onClick={removeData}>Remove Data</button>
          <button className="btn btn-dark my-3 mx-3" onClick={darkMode}>Dark Mode</button>
          <button className={`btn btn-ligth my-3 mx-3 text-${props.mode == 'light'?'dark':'light'}`} onClick={lightMode}>Light Mode</button>

        </div>
        </div>
        <div className={`container my-6 text-${props.mode == 'light'?'dark':'light'}`} >
          <p>{text.length} Characters {text.split(" ").length} Words</p>
        </div>

        <div className={`container  text-${props.mode == 'light'?'dark':'light'}`}>
             <details>
              <summary>
                summary 
              </summary>
              <p>
                {text}
              </p>
             </details>
        </div>
</>
    );
}

TextForm.propTypes={
  Title:propType.string

}