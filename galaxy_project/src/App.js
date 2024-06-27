import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Form from './components/Form'
import Akash from "./components/Akash";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/"  exact element={ <Form />} />
          <Route path="/1"  exact element={ <Akash />} />
          
          
      </Routes>
    </Router>
    
  );
}

export default App;
