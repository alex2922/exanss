import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Mainpage from "./pages/Mainpage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" Component={Mainpage} />
          <Route path="/about" Component={About} />
          <Route path="/service" Component={Services} />
          <Route path="/contact" Component={Contact} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
