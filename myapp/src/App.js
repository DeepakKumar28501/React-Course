import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';


// inside return block code is called JSX we can write js code inside html with tag {}
function App() {
  return (
    <>
     
    <Navbar  title="title props"  search="search section"/>
    <Body heading="This is PropTypes" comment="this is proptyprs crousel Comment"/>
    <Body />// default props
    </>
  );
}
export default App;
