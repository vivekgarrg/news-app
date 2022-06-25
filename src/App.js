import './App.css';
import Nav from './Components/Nav';
import Body from './Components/Body';
import Footer from './Components/Footer';
import FunComp from './Components/FunComp';

function App() {
  return (
    <div>
      {/* nav
      body
      footer */}
      <Nav/>
      <Body/>
      <FunComp val={"vivek"}/>
      <Footer/>
    </div>
  );
}

export default App;
