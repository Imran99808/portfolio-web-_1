import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Protfolio from "./Components/Protfolio/Protfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext} from "react";
import { theme } from "./Context";

function App() {
  const [ toggle,setToggle]=useContext(theme)
 
  console.log(window.location.pathname)
  return (
    <div className="App"
    style={{color:toggle? "" : "white",
          background:toggle?"" : "black"}}
           >
    <Navbar />
    <Intro  />
    <Services/>
    <Experience/>
    <Works/>
    <Protfolio/>
    <Testimonial/>
    <Contact/> 
    <Footer/>
    </div>
  );
}

export default App;
