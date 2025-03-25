import { BrowserRouter as Router,  Routes , Route} from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About"; 


function AppRoute() {
    return ( 
    
        <Router>
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/About" element = {<About/>} />
                <Route path="/Contact" element = {<Contact/>} />
            </Routes>
        </Router>
    
    
    
    );
}

export default AppRoute;