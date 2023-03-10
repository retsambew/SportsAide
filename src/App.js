import Navbar from "./components/structure/navbar";
import Home from "./components/home";
import Footer from "./components/structure/footer";
import Events from "./components/events";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
