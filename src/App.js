import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
// import SignalLightContainer from './SignalLight';
import SignalLightContainer from "./SignalLight";
import Shifter from "./Shifter";
import { Usercontext } from "./userContext";

function App() {
  return (
    <div className="App bg-success">
      <Usercontext.Provider value={"HI"}>
        <Products />
        {/* <SignalLightContainer/>     */}
        <Shifter />
      </Usercontext.Provider>
    </div>
  );
}

export default App;
