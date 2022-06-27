import './App.css';
import Nav from './Components/Nav';
import Body from './Components/Body';
import Footer from './Components/Footer';
import FunComp from './Components/FunComp';
import Fetch from './Components/Fetch';

function App() {
  return (
    <div>
      {/* nav
      body
      footer */}
      <Nav/>
      <Body/>
      {/* <FunComp val={"vivek"}/> */}
      <Fetch/>
      <Footer/>
    </div>
  );
}

export default App;
