import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Footer from "./components/Footer"
import Details from "./components/Details"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
    <Navbar/>
    <div className="d-flex mx-2 overflow-visible">
      <div className="mt-4 w-50" style={{"height":"100vh"}}>
      <Routes>
      <Route exact path="/" element={ <Form/>}/>
      <Route exact path="/details" element={<Details/>}/>
      </Routes>
   
      </div>
      <div className="w-50 overflow-auto" style={{"height":"100vh"}}>
        <img src="shivamResume.jpg" width="100%" height="auto" alt="Shivam Singhal Resume"/>
      </div>
    </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
