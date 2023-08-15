
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import TextForm from './components/TextForm'
import About from './components/About';
import React,{useState} from 'react';



// inside return block code is called JSX we can write js code inside html with tag {}
function App() {
  const[mode,setmode]=useState('light');//whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#212529';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     
    <Navbar  title="Text Utils" mode={mode} toggleMode={toggleMode} search="search section"/>
    {/* <Body heading="This is PropTypes" comment="this is proptyprs crousel Comment"/> */}
    {/* <Body />default component */}
    <div className="container">
      <TextForm  heading="Enter Your comment here....." mode={mode} />
      {/* <About /> */}
    </div>
    
    </>
  );
}
export default App;
