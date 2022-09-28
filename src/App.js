import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  const notify = () => toast("Wow so easy!");

   
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    
  
  return (
    
    <div className="App">
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <h1>Hello world!!</h1>
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
