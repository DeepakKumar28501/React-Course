
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import TextForm from './components/TextForm'
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';



// inside return block code is called JSX we can write js code inside html with tag {}
function App() {
  const[mode,setmode]=useState('light');//whether dark mode is enabled or not
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#212529';
      showalert("Dark mode Enabled.. ","success");
      document.title="TextUtils-DarkMode";
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode Enabled.. ","success");
      document.title="TextUtils-Light mode";


    }
  }
  return (
    <>
     
    <Navbar  title="Text Utils" mode={mode} toggleMode={toggleMode} search="search section"/>
    <Alert alert={alert} />
    <div className="container">
    <TextForm showalert={showalert} heading="Enter Your comment here....." mode={mode} />
    </div>
    
    </>
  );
}
export default App;
