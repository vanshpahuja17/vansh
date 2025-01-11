import logo from './logo.svg';
import './App.css';
import Products from './Products';
// import SignalLightContainer from './SignalLight';
import SignalLightContainer from './SignalLight';
import Shifter from './Shifter';


function App() {
  return (
    <div className="App">
      <Products/>
      <SignalLightContainer/>    
      <Shifter/>
    </div>
  );
}

export default App;
