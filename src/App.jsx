import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";

//PAGES & COMPONENTS
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

//UTILS
import ScrollToTop from "./utils/ScrollTop";
import { AppContext } from "./contexts/createAppContext";

function App() {
    const appContext = useContext(AppContext);

    if (!appContext || appContext.loading) {
        return <LoadingSpinner/>
    }
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
