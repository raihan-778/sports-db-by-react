import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() { 
  const notify = () => toast("Wow so easy!");
  
  return (
    
   
    <div className="App">
       <div>
          <h1>Hello world!!</h1>
          <Nav></Nav>
          <Home></Home>
          <button onClick={notify}>Notify</button>
          <ToastContainer />
        </div>
      
    </div>
  );
}

export default App;
