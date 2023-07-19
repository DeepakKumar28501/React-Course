import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


// inside return block code is called JSX we can write js code inside html with tag {}
function App() {
  return (
    <>  
      <Navbar />
    </>
  );
}

function navigator(){
  return(
    <>
    <div className="navbar">

    </div>
    </>
  )
}

function mycustomfunc(){
  return(
    <>
    <div className="blank">
      <nav>
        <div>
          <ol>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
          </ol>
        </div>
      </nav>
    </div>
    </>
   // <></> using this tag we can return multiple element or content its called JSX fragment
  )
}


export default App;
