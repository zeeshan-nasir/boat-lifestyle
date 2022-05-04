import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Home />
         <Footer />
      </div>
   );
}

export default App;
