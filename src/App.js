import Main_carousel from "./customer/components/Homecarosel/Maincarousel";
import Navbar from "./customer/components/Navigation";
import Homepage from "./customer/components/pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="fragment">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
